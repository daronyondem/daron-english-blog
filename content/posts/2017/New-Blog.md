---
Title: 12 years later, a new blog
date: "2017-07-04"
IsActive: True
IsListed: True
MinutesSpent: 50
---

Roughly 12 (11.5) years ago I started my first blog at [daron.yondem.com](http://daron.yondem.com). The idea was simple :) Take a look at my first blog post back in 2005. 

![](/media/New-Blog/first-blog-post.png)

[Some might argue](https://twitter.com/GorkemErcan/status/874607770070384640) that lunching a new blog isn't that exciting anymore. For me the supporting idea is still the same. I still find myself learning a lof from others blog posts and I feel the responsibility of putting out there what I see worth sharing. 

## What happened with the old blog? 

It started English but ended up being a 95% Turkish blog. I guess it was an unexpected but ordinary course. I had my company in Istanbul, doing business in Istanbul and the local software community in Turkey was in a pretty good shape welcoming me into the club. I had the chance to run INETA Turkey for a couple of years. Those were amazing days. Don't get me wrong, I spoke at least in 30 international conference during the 12 years and I still do. But I always argued that providing Turkish content has more value compared to English just because of the lack of content in Turkish. I still support that idea and definitely not planning to shut down my Turkish blog. Though things have changed a little. I'm working for a US company for 5 years now, doing business primarily in English speaking countries. I tried to make a multi-lingual blog work. Though it didn't work. It is simply not working for the readers. 

## Why not Medium?

First of all, a little bit of background. My [Turkish blog](http://daron.yondem.com) is running on an ASP.NET Forms codebase that I wrote in 2011 in just 10 days. The administration part was all Silverlight. Two years ago I converted all the content to Markdown and started writing all new blog posts in Markdown. 6 months ago I moved all the content to a git repo hosted on Github and built an Azure Function to sync the repo with the SQL Database backing the blog. Now, you can imaging my requirements, content needs to be markdown, content needs to be in source control.

These two requirements pretty much kills all competition. Jekyll was actually one of the finalists but I simply didn't like the way it is integrated in Azure Web Apps. Oh, there goes another requirement, it needs to run in Azure well. 

## Finally

Like every developer I decided I should write my own thing. That sounds familiar right? It is fun to create your own world. Luckily this time I was not alone. We started a closed source project that is essentially a multi-tenant blog back-end that syncs content from your github repo with a SQL Database to serve it through a simple HTML templating engine on ASP.NET Core 1.1. This is where you are reading this blog post. We wanted to keep it dead simple. Look at this blog posts page and the landing page! It is essentially just two pages. We have plans on making the engine public, but before that we have some more work to do :)
