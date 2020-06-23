---
Title: From Office 365 to my living room!
date: "2020-04-17" 
Tags: 
    - "Azure"
    - "Azure Logic Apps"
    - "Software"
---

![](/media/2020/20200417-dad-is-in-meeting.jpg)   

Working from home is a skill everyone is mastering nowadays. One of the difficulties of this new lifestyle is to create spatial separation between work and family. For most people, home meant just family time. Not anymore. It becomes especially hard when you have kids. Online meetings demand comprehensive household readiness. Custom backgrounds for webcam input and noise-cancellation might help, but those are treating the symptoms, not preventing it. What if there was an automated way to communicate all this?

If you are like me, you have most of your meetings on your calendar. I tend to block time on my schedule for the work that I have to do as well. That means that my calendar is pretty much a good indicator of what state I'm. I decided to experiment with a sign in our living room that would light up based on my calendar. It will help my family know when they should leave the beast alone :)

My goal for this project was to use stuff I already have at home and create a system that would require minimal maintenance. I decided to use the [Wemo Smart Plug](https://amzn.to/2KbQojp) that I have with the [Heidi Swapp LightBox](https://amzn.to/3ad2p2B) we occasionally use in our living room.

## IFTTT Webhooks

The first step was to figure out how to talk to the Wemo Smart Plug. Unfortunately, I was not able to find official APIs from Wemo or a developer program I could access. They do have excellent integration with IFTTT.com. That got me excited because IFTTT has Office 365 integration as well. The triggers for Office365 on IFTTT gives a calendar events start and end time. However, within the confines of IFTT functionality, there is no way I can turn the light off when the event is completed. Moreover, an event's completion does not necessarily mean the light has to be turned off. Another conflicting event on the calendar might still be ongoing. With all that, I decided to use IFTTT webhooks to, at least, use their Wemo integration.

![](/media/2020/2020-04-17_11-10-07.png)

I started creating an applet on IFTTT. When you are creating a webhook definition as a trigger on IFTTT, an event name is required. I created two separate webhooks for turning the lights on and off. I used event names **eventstarted** and **eventfinished**.

![](/media/2020/2020-04-17_11-14-20.png)

The action for the applet on IFTTT will be the Wemo integration. The only item on this step is to select the right switch from your Wemo account. Once the applet is ready, go to the webhook settings page and select the documentation link.

![](/media/2020/2020-04-17_11-19-45.png)

Once you are on the documentation page, you will get your private API access key and the simple URL you can hit to trigger the applet.

## Are Azure Logic Apps magical?

Now that we have a pretty straightforward way of accessing our switch, we need to figure out how to access our calendar data and how we want to implement the logic itself. One of my favorite services with various out-of-box enterprise integrations is **Azure Logic Apps**. I decided to use its **Office 365** integration and write some code on Azure Function to implement the logic that would turn the lights on and off.

Azure Logic Apps' Office 365 integration has a trigger where you can be notified of a calendar event before the event starts. But there is still the issue of turning the lights off when the event is complete, and multiple conflicting events when you might turn the lights off when another event is already in progress. While looking into what was available in Azure Logic Apps, I noticed that I could get a calendar view of all events between a specific start and end date. That made me think, what if I query the next one hour every five minutes and look if there are any events. If there is, I can turn the light on, if not, turn off. As simple as that. And better! I might be able to implement all that in the Logic App, without a single line of code, no maintenance.

![](/media/2020/2020-04-17_11-36-59.png)

I started with a simple Recurrence trigger set to repeat every 5 minutes. When using the Office 365 integration, I fetched the calendar view between now and one hour into the future. This will get us all the events in a JSON array, including all-day events.

![](/media/2020/2020-04-17_14-21-18.png)

Azure Logic Apps do not just have enterprise integrations, but a pretty nice set of logical components as well. Here we are going to filter the array based on the value of a particular attribute. The resulting collection will only have calendar events that are not full-day events.

![](/media/2020/2020-04-17_11-50-53.png)

Our final steps if to check if there are any events left in the array at all. I decided to count the items in the array to see if there are any events during the timeframe we queried. We will use a **Condition** control in Logic Apps and define a **dynamic content expression** to get the **length** of the array coming out of the **Filtering** control.

![](/media/2020/2020-04-17_11-52-42.png)

Based on the result of our **Condition**, we have to submit an HTTP request to the endpoint we got from IFTTT with the matching event name. For that one, we can use the HTTP control from Logic Apps.

## All done!

That's all. We connected our Office 365 calendar to our Wemo Switch with zero lines of code using Azure Logic Apps and IFTTT. Now everyone in the living room will know when I'm in a meeting! Lovely!