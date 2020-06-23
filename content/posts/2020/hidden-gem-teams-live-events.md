---
Title: "Hidden Gem: Teams Live Events"
date: "2020-04-20" 
Tags: 
    - "Software"
    - "Teams"
---

With the current COVID-19 "stay-at-home" circumstances, online meeting and collaboration tools are in high demand. Things get trickier if you start looking for a tool where you can invite thousands of people. It is not that there are no solutions; it is just the setup of your environment that might be a little complicated.

I started looking for an easy way out, wondering if the tools that I already have and paying for can help me. Here are my requirements;

- I do not want to create additional costs.
- I want to be able to host up to 1500 people.
- I'm not willing to set up encoder software etc. Preferably use what I already use, or something that wouldn't take more than 5 minutes to set up.

The first stop was Zoom. Unfortunately, they had a 300 participant limit on the tier we were using in our organization. I could spend an [additional amount to get more participants in](https://support.zoom.us/hc/en-us/articles/201362823-What-is-a-Large-Meeting-), but I didn't want to. 

The second stop was Microsoft's Teams. We have Office 365 E5. Apparently, it has a feature called ["Live Events"](https://docs.microsoft.com/en-us/microsoftteams/teams-live-events/what-are-teams-live-events) that I had no idea they ever existed. A regular Teams meeting can accommodate up to 250 participants, but a live event [can host 10.000 attendees](https://docs.microsoft.com/en-us/microsoftteams/limits-specifications-teams)! The underlying platform for Live Events is pretty robust thanks to Azure Media Services and Azure CDN. You can have multiple presenters, multiple desktop sharing sessions, split-screen if needed, and that is included in your Office 365 subscription if you have E1, E3, E5, or A3, A5 subscription. In my case, we had E5, but if you are wondering what's the cheapest option [E1 8$/month](https://www.microsoft.com/en-us/microsoft-365/business/office-365-enterprise-e1-business-software?activetab=pivot%3aoverviewtab),  and A3 for academic is [2.5$/month](https://www.microsoft.com/en-us/microsoft-365/academic/compare-office-365-education-plans?activetab=tab%3aprimaryr1) with an annual commitment. 

If everything goes well, it looks like I have a solution I can use. However, my first try to set up a live public event didn't work out. The "public" option in Teams was disabled. After some research, I figured "public" events have to enabled as part of the organization's policy. You have to visit [https://admin.teams.microsoft.com/](https://admin.teams.microsoft.com/) and change live event policies to allow members of your organization to create live events with public attendance. Keep in mind that you might need to wait for about 30 minutes for the configuration to propagate. 

![](/media/2020/2020-04-20_13-20-34.png)   

Once the configuration is done, it is time to go to the Teams Calendar and click the down-pointing arrow to discover the live event option.

![](/media/2020/2020-04-20_12-39-28.png)

Give your event a name. Include all presenters you want to include.

![](/media/2020/2020-04-20_12-40-28.png)

The next step is where we set out event **public** and **enable QA** if you are up to it.

![](/media/2020/2020-04-20_12-41-49.png)

Finally, you have an invite you can share with anyone. People can now join your event from their browser, with no download requirements and no signups.

![](/media/2020/2020-04-20_12-42-38.png)

On your end, as a broadcaster, you will use the Teams client to publish content. On the left of your screen, you pick the template and queue up the content you want to push live next. After selecting **"Send live"** the material goes to the right panel that shows your live stream. Of course, to start the event, you have to select **"Start"** :) On the bottom of the screen, you can see all the content shared by all participants. That gives you the ability to queue what content has to come next and switch when needed.

![](/media/2020/2020-04-20_12-48-14.png)

The participant's view is pretty simple too. They see the content and get a Q&A panel if you enabled it. The presenter view has a Q&A panel as well. You can answer questions and publish them for everyone to see if you want to. Otherwise, the question and the answer stay as a secret between you and the attendee.

![](/media/2020/2020-04-20_12-51-48.png)

That is all! As easy as it goes. In my case, I was not aware that there was such a thing called Teams live events, that we were already paying for :) and wanted to share.

Stay safe!