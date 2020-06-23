---
Title: Rumblings from Build 2019
date: "2019-05-08" 
Tags: 
    - "Software"
    - ".NET"
    - "Azure"
    - "Azure Machine Learning"
    - "Azure SQL"
    - "Build"
    - "Edge"
    - "Github"
    - "Serverless"
    - "Visual Studio"
    - "WSL"
---

![](/media/2019/build-2019.jpg)

Let me start with how it feels to be at Build this year :) Worse :) and I'm not joking. I have been at Build Conferences since 2011. In 2011 every attendee received a Windows 8 Tablet and that made sense. It was the infancy of Metro UI and it was a beautiful idea to give everyone a Windows Tablet so that developers as invested as attending / traveling for Build can get theirs hands on the tools as soon as possible. The idea was not new though. In 2009 PDC every attendee received a laptop with a bunch of senors in it just so that they can start building applications using the new Sensor and Location APIs in Windows 7. Remember when Microsoft gave a Windows Phone to ever dev? You got the point right? No give aways! and I'm not being greedy here. People get excited when they get something to play with. It does not matter if that is a big ass laptop / tablet or a simple RPi. I remember the days I brough hardware from US back to Turkey and actually organize events to do demos around the software that bundles with the hardware. Good old days :)

For all the years I have attended Build, PDC or any Microsoft developer conference I have always attended the keynote in person. This year, based on rumors I heard I decided to do something different. I watched the keynote in a private viewing room hosted for Microsoft Regional Directors. "What?? Did you fly to Seattle for 16 hours and watched it from the live stream?" Ah yes... I'm getting old and like to be in a comfy room with my laptop. Actually, I did like having VIP seating during last years Build, but it looks like Microsoft decided to host their keynote in much smaller rooms this year. Instead of the six thousand people large keynote atmosphere they decided to do it more "cozy" is what everyone is calling it :) So far for inclusivity I guess. I'm not sure what's going on but what I keep hearing is "We are experimenting. We are not going to do what's been done just because it was the way it's done." I hope someone is quantifying the potential damage of these experiments ran on this scale :) Personally, I sometimes like it when people vote for consistency based on learned lessons. 

## How were the keynotes?

Did I tell you Microsoft is experimenting... ah yes. We had three keynotes here. The first one was called the Vision Keynote primarily hosted by Satya Nadella. I guess it was an "ok" keynote. Following Microsoft for so long I guess I'm too much aware of Microsoft's vision to find an update at Build really worthy. As always I didn't like the parts that felt like marketing. Those were mostly repeating messaging from last years Build with customers like Starbucks, BMW doing the same things over and over again. If you can guess what company is going to be invited to the stage before they do, that is not good. To be honest, some of the reactions of presenters sounded really pushy and ridiculous "Look how much fun this is!" type of burst if you know what I mean :) 

Then comes the choice! There is an Azure Keynote and a Microsoft 365 Keynote. You need to pick one! Ah yeah, you can always watch it on-demand. I think having concurrent keynotes devalues the concept of a keynote but it made me think a couple of things. First off, if we accept the fact that we are having different audiences at Build, why wouldn't we have this conference merged into Ignite? Second, why not shorten the content so that you can fit all you have to say in a freaking single keynote with a larger audience :) Isn't parallel keynotes an easy way out? I was pretty interested in much of the news announced in the M365 keynote but I couldn't miss the Azure one. It looks like "On-demand" it is. If I'm going to be forced to watch one of the keynotes on-demand don't judge me watching the whole thing in my private room! :) 

Overall the Azure keynote was fine. It was actually pretty well executed if you think about all the technical issues DEMO Gods brought onto the stage :) 

## Now the news!

First of, let me put a disclaimer here :) This is not about covering all the news from Build. I will only list the news that I find interesting :) You should definitly keep reading other blogs / news site or whatever channels you use to get the full picture if your interests are not aligned with mines 👍

### Credge! ☺

Guess what that is? [Let me enlighten you](https://www.urbandictionary.com/define.php?term=Microsoft%20Credge). Now that we got that fixed :) I love the new Edge! It's been a couple of weeks I switched to the dev channel for full-time use on my production laptop. I have been a long time user of Chrome. I can't say I was very happy with it. I tried everything else out there including things like [Vivaldi](https://vivaldi.com/). I always kept going back to Chrome. That didn't happen with Credge! Love it! I had the chance to visit the Edge booth and I should say I'm a bigger fan now! Feel free to [grab yours](https://www.microsoftedgeinsider.com/en-us/), try it out!

### Azure SQL Database Edge

This might sound like I'm being too picky, and hell yes. Just so you know, I manage a team building an ARM-based [IoT Core Digital Signage Appliance](https://www.xogo.io/). Being able to analyze time-series data while it’s being streamed using time-windowing, aggregation, and delivering real-time local insights by combining data types such as time-series and graph is HUGE! Go, [apply for the preview](https://azure.microsoft.com/en-us/services/sql-edge/) if you are interested.

### Azure SQL Serverless

Anything that is serverless is exciting to me! :) Getting Azure SQL into the Serverless space was a surprise announcement to me. I wasn't able to get my hands on it yet, but the whole concept sounds pretty lovely. Here are [some details if you are interested](https://docs.microsoft.com/en-us/azure/azure-sql/database/serverless-tier-overview) about how one can make SQL Serverless :) or make it as close as it goes. 

### Azure App Configuration

Did you ever feel like app configuration management and distribution is a mess in Azure :) Here is [a new service that can help you](https://docs.microsoft.com/en-us/azure/azure-app-configuration/overview)! I love the concept and the fact that someone at Microsoft was up to improve this game. 

### Visual Studio Online

This is where the Visual Studio team is trying to confuse anyone again, and again :) Remember that Monaco, it is coming back! It is not the same code base. This time we will have Visual Studio Code in a browser. You will be able to navigate to online.visualstudio.com and start coding. This might be an interesting option to get that iPad out of the content consumption mode for me. 

### In other news!

- Windows Terminal will be out summer 2019. [Open sourced now](https://devblogs.microsoft.com/commandline/introducing-windows-terminal/). 
- Microsoft re-implementing [react-native-windows in C++](https://github.com/Microsoft/react-native-windows/).
- Windows Subsystem for Linux v2 rolls back to a VM with a real [Linux kernel shipping with Windows](https://devblogs.microsoft.com/commandline/announcing-wsl-2/).
- .NET Core vNext [will be called .NET 5](https://devblogs.microsoft.com/dotnet/introducing-net-5/) arriving in 2020.
- ML.NET 1.0 is released.
- Github Identity support for Azure coming soon!

That's all I have for you. Here is [the official Book of News for Build 2019](https://news.microsoft.com/wp-content/uploads/prod/sites/558/2019/05/FINAL-Book-of-News-Build-2019-5.6.19-2.pdf) that covers every little piece of an announcement made during Build. Enjoy!
