---
Title: "Your 2020 Azure Storage Update"
date: "2020-10-03" 
Tags: 
    - "Software"
    - "Azure"
    - "Azure Storage"
ShowTableOfContent: true
---

If you are like me, working on Azure for more than five years, in my case 10+, you might be thinking storage is just storage, what can be new? Indeed, that has been the case for a long time. Azure Storage has been a pretty silent and stable service in Azure that didn't move much forward during the years. The only improvement that stands out in my mind is the introduction of [Access Tiers such as hot, cool, and archive](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers?tabs=azure-portal). 

With that said, let me give you a peek into what's new and what's coming to Azure Storage. Please proceed for your 2020 Azure Storage Update :)

And before that, let me give you a heads up. Most features below are in Preview, and the code samples are from *.NET SDK 12.7.0.Preview.1*. Unfortunately, that makes all the information in this post pretty fragile to change. Still, the high-level concepts should stick.

## Blob Versioning

Remember our old friend, Blob Snapshots? https://docs.microsoft.com/en-us/azure/storage/blobs/snapshots-overview Think about an automated version of it. That's what blob versioning gets us. Blob versioning can be enabled on a storage account level. Blob versioning works only for Block Blobs, and versions are immutable. If you have a Page Blob, you can still use versioning, but Put Page or Append Block will not create a new version. Instead, you have to use Put Blob. 

![](/media/2020/2020-10-02_10-15-36.png)

An easy way to test versioning out is Azure Storage Explorer. You can simply upload a text file and upload another one to replace the original. When you right-click on the blob, you can navigate to "Manage Versions" to see all the versions created for the particular blob. 

![](/media/2020/2020-10-02_10-16-35.png)

If you get a public access Url for an older version, you will get a link with the versionId being the timestamp when the version is created. You can delete versions by their versionId if needed.

```
https://.../testing.txt?versionId=2020-10-02T07:14:15.6252533Z
```

## Soft Delete for Blobs and Containers

Oh yeah! We have it all now. You can enable soft delete for blobs and containers. Blob soft delete is nice, but container soft delete is a lifesaver! Once you enable blob soft delete, all your blobs, containers, versions, and snapshots will be kept for you based on the retention day you set up. 

Soft delete for blobs works differently if you have versioning enabled for your account. If you have versioning, a new deleted version is created. Otherwise, a new deleted snapshot is used to keep track of changes. In my case, I had both versioning and soft delete enabled. After deleting a blob I had to pick "All blobs and blobs without current version" to see soft deleted blobs instead of picking "Active and soft deleted blobs". 

![](/media/2020/2020-10-02_11-22-40.png)

When versioning is enabled to restore a blob, you have to find the oldest version and copy it as a new version to bring the blob back to life. In contrast, if you don't have versioning enabled, you have to use [Undelete Blob](https://docs.microsoft.com/en-us/rest/api/storageservices/undelete-blob) to restore the blob with all its snapshots.

When it comes to containers, things are a little less complicated. Once you have the soft-delete functionality enabled, you can see a list of deleted containers on the Azure portal or through the APIs.

![](/media/2020/2020-10-03_9-49-09.png)

```cs
List<BlobContainerItem> containers = new List<BlobContainerItem>();
await foreach (BlobContainerItem foundBlobContainerItem in 
    serviceClient.GetBlobContainersAsync(BlobContainerTraits.None, 
    BlobContainerStates.Deleted))
{
    if (foundBlobContainerItem.IsDeleted == true)
    {
        await serviceClient.UndeleteBlobContainerAsync(
            foundBlobContainerItem.Name, foundBlobContainerItem.VersionId);
    }
}
```

The code above is listing all the containers, including deleted ones, and restore the ones that are deleted.

## Change Feed

How many times did you dream of being able to track changes in Azure Storage? I did many, many times. The new change feed with Blob Storage guarantees ordered logs of all changes, including blob metadata operations. The feeds themselves are stored as blobs in the $blobchangefeed container. You can read the logs in batch or consume as a stream.

![](/media/2020/2020-10-02_12-42-55.png)

All logs are saved in JSON files following [Apache Avro](https://avro.apache.org/docs/1.8.2/spec.html ) specifications. You will see a nested folder structure splitting all logs into hourly files.

![](/media/2020/2020-10-02_12-49-25.png)

If you convert one of the AVRO files into JSON, here is what you get. This one is a single record out of the large array of records.

```json
{
   "schemaVersion": 4,
   "topic": "/subscriptions/X/resourceGroups/Y/providers/Microsoft.Storage/storageAccounts/storage2020update",
   "subject": "/blobServices/default/containers/test/blobs/testing.txt",
   "eventType": "BlobCreated",
   "eventTime": "2020-10-02T09:47:20.5187183Z",
   "id": "f2ba2587-c01e-0009-3aa1-98dae2062da8",
   "data": 
   {
      "api": "PutBlob",
      "clientRequestId": "9a8cea11-c222-4395-4863-f276fbb99b58",
      "requestId": "f2ba2587-c01e-0009-3aa1-98dae2000000",
      "etag": "0x8D866B82811835C",
      "contentType": "text/plain; charset=utf-8",
      "contentLength": 2,
      "blobType": "BlockBlob",
      "blobVersion": "2020-10-02T09:47:20.5177180Z",
      "containerVersion": "01D698A101AB0469",
      "blobTier": null,
      "url": "",
      "sequencer": "00000000000000000000000000002B0E00000000009e6b05",
      "previousInfo": null,
      "snapshot": null,
      "blobPropertiesUpdated": null,
      "asyncOperationInfo": null,
      "storageDiagnostics": 
      {
         "bid": "2547f092-7006-011f-00a1-985d29000000",
         "seq": "(11022,1995961,10382085,9542365)",
         "sid": "2df676f3-8ec2-eb95-3a44-596e8437325d"
      }
   }
}
```

## Point-in-Time Restore

Wait, what? Oh yes. Point-in-Time restores all your block blobs based on any UTC timestamp you provide. You can restore whole containers! There are some prerequisites, though :) You have to have soft delete, change feed, and blob versioning enabled on your storage account. Makes sense, right? It does. Once you have all these functionalities in place, restoring to a point in time is no longer rocket science. In order to restore back in time, you can either call [Restore Blob Ranges](https://docs.microsoft.com/en-us/rest/api/storagerp/storageaccounts/restoreblobranges) or go to the Azure Portal.

![](/media/2020/2020-10-02_11-47-33.png)

![](/media/2020/2020-10-02_13-44-55.png)

## Blob Indexing

The design of blob storage container names and blob names are usually optimized and planned to accommodate the lookup needs of the project. However, it's never enough, and I usually end up keeping a list of my blobs and its metadata somewhere else where I can easily query. I wish we could use the user-defined metadata name-value pairs to query our blobs. We could do that incorporating Azure Search, but there is something new.

Instead of using Blob Metadata, we have a brand new, auto-indexed, and queryable key-value pair concept called Tags. Compared to Metadata, you can only have up to 10 tags per blob, but that should be enough for most needs.

```cs 
AppendBlobClient newBlob = container.GetAppendBlobClient("sampleBlob");

AppendBlobCreateOptions appendOptions = new AppendBlobCreateOptions();
appendOptions.Tags = new Dictionary<string, string>
{
    { "Approved", "false" },
    { "City", "Istanbul" },
    { "Expires", "2020-11-20" }
};
await newBlob.CreateAsync(appendOptions);
```
Once you have the tags in place, you can submit your query for various operations. In the example below, I'm merely doing a select and getting just the first blob found. The feature is currently in preview. I strongly suggest you look into its [current limitations](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-manage-find-blobs?tabs=json#conditions-and-known-issues-preview) before going all in. 

![](/media/2020/2020-10-02_20-37-43.png)

## Blob Query

This one is interesting. If you look from the perspective of a regular developer who is used to store binary in blobs, this might not make a lot of sense. However, if you start thinking about JSON files or even CSV files in blobs, I'm sure you will appreciate what Blob Query brings in.

Blob Query gives you the ability to query the internals of a CSV or JSON file stored in a single blob and get the result out of the storage instead of getting out the full file. Most of the documentation around the Blob Query is structured around the use cases of analytics and "Azure Data Lake Storage". The feature is actually called [Azure Data Lake Storage query acceleration](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-query-acceleration). If you wonder about pricing, you have to look up to [Data Lake pricing](https://azure.microsoft.com/en-us/pricing/details/storage/data-lake/).

With all that, let's see what we have here. In this case, I will store the JSON file below in a single blob called "array.json" in a container called "testing" in my storage account.

```json
{
  "city": "Istanbul",
  "gps": "40.9910953,28.8612721"
},
{
  "city": "Paris",
  "gps": "48.8589101,2.3120407"
},
{
  "city": "New York",
  "gps": "40.6976637,-74.1197622"
}
```

Once it's in the storage my goal is to query by city and get the GPS coordinate of the city instead of pulling out the full blob.

```cs
BlobServiceClient serviceClient = new BlobServiceClient("{ConnectionString}");
BlobContainerClient container = serviceClient.GetBlobContainerClient("testing");
BlockBlobClient jsonBlob = container.GetBlockBlobClient("array.json");

var options = new BlobQueryOptions
{
    InputTextConfiguration = new BlobQueryJsonTextOptions(),
    OutputTextConfiguration = new BlobQueryJsonTextOptions()
};

string query = @"SELECT gps FROM BlobStorage[*] where city = 'Istanbul'";
var queryResult = await jsonBlob.QueryAsync(query, options);
var reader = new StreamReader(queryResult.Value.Content);
var result = reader.ReadToEnd();
```

Isn't this amazing and equally weird :) I would never imaging submitting a T-SQL and querying blob. One feels like someone rubbed some CosmosDB on blobs :) The result of the query, in this case, is JSON. If the source file was a CSV, we could query that and get a CSV out of it.

![](/media/2020/2020-10-03_12-22-56.png)

## How to Get Access to These Features?

Some of the features above are in preview. You will need to apply to get access to them. The application process is as simple as running an Azure CLI command. I suggest using Azure Cloud Shell for ease of use. 

These are the list of features you might want to register for. 

```powershell
az feature register --namespace Microsoft.Storage --name ContainerSoftDelete
az feature register --namespace Microsoft.Storage --name BlobIndex
az feature register --namespace Microsoft.Storage --name BlobQuery
az feature register --namespace Microsoft.Storage --name Changefeed
az feature register --namespace Microsoft.Storage --name Versioning
az feature register --namespace Microsoft.Storage --name RestoreBlobRanges
az provider register --namespace 'Microsoft.Storage'
```

Once you have applied, you can check your registration process by merely querying pending registrations.

```powershell
az feature list | ConvertFrom-Json | 
   where {$_.properties -Like '*state=Registering*'} 
```

Getting approval for your registrations might take an hour. In my case, I was able to get approval in about 30 minutes.

## Resources

- [Blob Versioning](https://docs.microsoft.com/en-us/azure/storage/blobs/versioning-overview)
- [Soft delete for blobs](https://docs.microsoft.com/en-us/azure/storage/blobs/soft-delete-blob-overview)
- [Soft delete for containers (preview)](https://docs.microsoft.com/en-us/azure/storage/blobs/soft-delete-container-overview?tabs=powershell)
- [Change feed](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-change-feed?tabs=azure-portal)
- [Point-in-time restore](https://docs.microsoft.com/en-us/azure/storage/blobs/point-in-time-restore-overview)
- [Manage and find Azure Blob data with blob index (preview)](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-manage-find-blobs?tabs=azure-portal)
- [Utilize blob index tags (preview) to manage and find data on Azure Blob storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-index-how-to?tabs=azure-portal)
- [Filter data by using Azure Data Lake Storage query acceleration](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-query-acceleration-how-to?tabs=dotnet%2Cpowershell)
- [Query acceleration SQL language reference](https://docs.microsoft.com/en-us/azure/storage/blobs/query-acceleration-sql-reference#table-descriptors)