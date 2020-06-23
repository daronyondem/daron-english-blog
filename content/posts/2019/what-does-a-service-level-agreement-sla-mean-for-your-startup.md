---
Title: What does a Service Level Agreement (SLA) mean for your startup?
date: "2019-08-11" 
Tags: 
    - "Software"
    - "Azure"
    - "SLA"
math: true
---

![](/media/2019/cropped-AdobeStock_38444058-1080P.jpg)

You have started with a POC, or maybe an MVP and not moving over the steps of being a mature startup. You are pretty careful with the SaaS / PaaS services you are consuming as part of your architecture, delivering your solution to your customers. You check their SLAs and make sure you get the highest SLA by picking the right provisioning strategies. Life is soo good. Whatever functionality you want to add into your solution, you always find your choice of cloud provider has a service offering that would make it easy for you to deliver functional value to your customers. We are in an era cloud infrastructure options are so vibrant.

## Did you think about your SLA vs. the Service Providers SLA?

What is this guy talking about? I'm getting 99.95% SLA from Azure App Service. That is my SLA! I pass it on. Right? Not really. Let's take a look at a simple architecture.

![](/media/2019/20190811-01-1024x446.jpg)

This is pretty much the simplest architecture ever :) In this case, we have a simple app service and a backing SQL Database. SQL Database is set up to the standard or basic tier. The app service is a single region deployment. We could move the SQL into the business-critical tier and have multiple deployments of app service with a traffic manager in front of it to increase our SLA. However, that is not where I want to go. Look at the SLA percentages in Figure 1 and see how they compound. In this particular case our service SLA we can offer to our customers is much lower compared to any SLA we get from our service provider. This is sometimes called **Composite SLA**. In this case, calculating a Composite SLA is easy; 99.95% × 99.99% = 99.94%. How would that look like in a more complex architecture?

![](/media/2019/20190811-02-1024x772.jpg)

Once you look into Figure 2, I guess you will get my point :) Every little piece of service you are adding into your architecture has to go through the lens of your composite SLA. Just because a service has a high SLA, it does not mean it is not going to take down your composite SLA. There is a big chance it will decrease your SLA if you didn't think about it.

One solution to the problem above is to keep your architecture as simple as possible :) I know this might sound counterintuitive, but simplicity is king! Other solutions are;

- [Queue-Based Load Leveling pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling): prevents load spikes and timeouts. 
- [Throttling pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/throttling) : Slowing down / rejecting greedy consumers for the sake of SLA. Prioritzation of functionalities in a solution by disabline some functionalities to help others function to keep the SLA. Making sure a single tenant in a multi-tenant environment does not prevent SLA breach for other tenants.
- [Resilliency Patterns](https://docs.microsoft.com/en-us/azure/architecture/patterns/category/resiliency) : Avoid single point of failure. [Architect for resilliency](https://docs.microsoft.com/en-us/azure/architecture/framework/resiliency/business-metrics) and reliability. 

## Let's materialize some of these concepts.

Let's look at some of the Azure services that can help you with the above concepts, and some additional reminders I would like to share based on my personal experience. 

- The first and maybe the easiest thing to do is to have multiple deployments, failovers. You can use  Azure Load Balancer, [Cross-zone Load Balancer](https://docs.microsoft.com/en-us/azure/availability-zones/az-overview) and [Azure Traffic Manager](https://docs.microsoft.com/en-us/azure/best-practices-availability-paired-regions) for [request routing](https://docs.microsoft.com/en-us/azure/traffic-manager/traffic-manager-routing-methods). Make sure you select pricing tiers where you can have multiple instances of services. You might be able to [Azure Application Gateway](https://docs.microsoft.com/en-us/azure/application-gateway/application-gateway-introduction/) as well, but make sure you have multiple instances of that as well. Load balance if you can!
- Second, make sure you read [Azure Storage performance targets](https://docs.microsoft.com/en-us/azure/storage/common/scalability-targets-standard-account). I have seen many cases where people though Azure Storage had an infinite scalability capability. That's not the case. Use [Azure CDN](https://azure.microsoft.com/en-us/services/cdn/) where possible. 
- While at it, look at the [Azure Subscription Service Limits](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits) to stay safe!
- Use Azure Cache, not as a new dependency, but as a cache that has a fallback to improve SLA.
- Offload CPU/Memory intensive work to background processes.

## How does having multiple environments affect my SLA?

This is going to be a little bit tricky. Let's say we have two deployments in two different regions. We have an Azure Traffic Manager in front of our environments. Region A and Region B has the same exact deployment we discussed in Figure 1.

![](/media/2019/20190811-03-1024x667.jpg)

We will start by calculating the unavailability of each region. In our case, that would be 0.06%. The composite unavailability of two regions is 0.06*0.06=0.0036%. That means the composite SLA for the two regions is 99.9964%. That is pretty good. Now, we need to include the SLA for the Azure Traffic Manager itself. To do that we multiply 99.99% with 99.9964%. That gives us 99.986%. Our composite SLA for the service has increased from 99.94% in Figure 1 to 99.986% in Figure 2. That is pretty close to four nines. The exact formula for our calculations in a multi-regional deployment will look like the one below;

$$ \Chi = \Tau \times (1-(1-C)^{y})$$

C = Composite SLA for a Single Region  
Y = Number of regions deployed  
T = Azure Traffic Manager SLA    
X = Solution SLA   

Next time you see a suggested architecture diagram with tons of services incorporate from a cloud vendor :) think about how that will affect your SLA goals and what additional costs you will need to take on to keep it at the level you need. I hope this blog post helps as a reminder ;) See you next time. 

