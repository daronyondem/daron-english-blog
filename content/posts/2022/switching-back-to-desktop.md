---
Title: "Switching Back to Desktop as My Day to Day Driver"
date: "2022-03-12" 
Tags: 
    - "Software"
    - "PC"
    - "Hardware"
---

Finally said good by to my Dell Precision 5520. I was thinking about what would be next for a while, and considering the home office situation getting more prominence, I decided to roll with a full-blown desktop after 15 years of laptop life.

The primary bottleneck on my 5520 was the Quadro M1000. The rest of the setup with 32GB DDR4, Xeon E3-1505M, and 2TB Samsung 970Pro SSD were all fine for a five-year-old laptop. But that GPU was hardly handling Teams calls with 10+ people having their cameras on. When I wanted to use OBS + Screen Sharing + a couple of VS instances, things were slowing down drastically. Moreover, the device did not support Windows 11 despite having TPM 2.0. The processor generation was the issue.

![Complete desktop setup presented.](/media/2022/2022-02-21-Desktop.jpg)

The primary reason I'm switching to a desktop is that thanks to COVID, I found myself settling down instead of working from here and there. One reason might be that I'm relatively having more calls and meetings compared to my past roles. Heck, I even bought a standing desk to stay more at my desk! Second, you can push harder on the performance front on a desktop machine and have a relatively better chance to upgrade parts. If I could upgrade the GPU of my 5520, I could still use it.

## The Desktop Build

For the build, my first requirement was a good GPU that could serve me well in video editing. I went with an RTX3080. For the processor, I wanted the latest generation Intel without specific core count requirements. I was not complaining about my previous Xeon E3-1505M, so pretty much anything, Intel's latest generation should do the job. Unfortunately, I still carry the old AMD Virtualization issues with emulators scars/prejudices. I ended up picking i7-12700KF. This is a 12 core processor with eight performance and four efficiency cores. The base clock speed for P-Cores is 3.60, and Max Turbo is 4.90Ghz. With the help of a good liquid cooling setup, I rarely see anything lower than 4.70Ghz. For memory, I picked 4x16GB DDR5 5600 memory. With the current 12th Gen and Z690 chipset, it is impossible to drive four memory slots to 5600Mhz. I'm currently running at 4000Mhz, which is still good. Unfortunately, there were no DDR5 32GB sticks in the market. I picked Samsung 980 Pro 2TB for the disk drive with 7000 MB/s sequential read and  5100 MB/s write. I added some spare Samsung 860 Pro 2TB SATA drives lying around in a RAID-0 setup for temp storage. Finally, for the power supply, I chose Asus 1200W 80+ Platinum which is a little overkill, but I like that pretty much always the PSU fan is off. The max load for this build should not go over 700W.

![Tower internals are presented.](/media/2022/2022-03-12-Case-Internal.jpg)

If you are interested in more and links for the parts, [here is the complete list](https://pcpartpicker.com/list/KZ2GGL) for the build.

I've been using the system for three months now. I can't describe how a fresh breath of air it is! For the first time in a while, I feel like the hardware and technology have disappeared, and I have a direct connection with my work. I know this sounds salesy and buzzzwordy, but it is precisely how I feel. Now the more important question is, how long is this going to last 😊 Well, we will see.

## Real-Life Performance

First off, I should tell you that despite all performance measurements and tests we can do, the new build gave me a totally different perspective on the user experience of various video editing packages. It should be obvious, but apparently, it is not. For example, I have always complained that the user interface for Camtasia Editor was sluggish. It is not anymore 😊. Same for Davinci Resolve... it is buttery smooth. I figured that using the same device for more than three years is pretty much the equivalent of the [boiling frog story](https://en.wikipedia.org/wiki/Boiling_frog). One might argue that a refresh every three years is too costly at the level of this build's costs. However, I don't believe that has anything to do with the annual cost of procuring a device. It is just a matter of picking the level of performance you need and making sure it is still up to the same standards every three years. That's what I will try to do, and the three years internal is nothing scientific 😊 I suggest you find your sweet spot and not get boiled 😊

So, how do I measure the performance? I believe there are a couple of tests that help me. Having OBS, real-time streaming, and real-time local capture while using 2-3 instances of Visual Studio and Powerpoint is a good test. To push it a little harder, you can replace real-time streaming with the pair of virtual webcam, and Teams call, where you have 10 to 15 attendees with their cameras open. I'm good if I can do all of them without feeling any delays or sluggish behavior!

Another test is to see the processor and GPU usage during video encoding. This test tells me about the overall performance and where the bottleneck is moving forward to a future build.

I have run a sample Camtasia edit for a 10 minutes output with a couple of audio and video tracks. Nothing very heavy. It took 1 minute 50 seconds to render 10 minutes 1080P file. All CPU cores are used pretty well, hitting 100% use at times. For some reason, the GPU was used only for decoding landing a 65% average use. This tells me that more CPU could be potentially helpful here. However, I'm not complaining and am pretty happy that I can keep working on my computer without feeling anything while a background render is in progress. The efficiency cores on the 12th gen might be the key.

![Task Manager Performance tab is open. CPU usage shows 64% average with some spikes. GPU usage shows 67% in average.](/media/2022/2022-03-12_14-39-55.png)

My next test uses Adobe Media Encoder to encode a 10 minutes 4K H264 file upscaling a 1080P one. It took 2 minutes with a 100% GPU use and pretty much no CPU use. I would assume an Adobe Premiere export would use the CPU as well, as this would not be a simple encode from one file to another.

![Task Manager Performance tab is open. CPU usage shows 23% average. GPU usage shows 100% in average.](/media/2022/2022-03-12_14-52-45.png)

This final test has a more complex workload. This is DaVinci Resolve 17 with a multiple-track edit out of 1080P and 4K source files. All source files are H.264. The first test with DaVinci is an H264 export. You can see that GPU is pretty much idling, but CPU is at 100%. A 1-hour video export took around 25 minutes. Apparently, an H264 export is pretty CPU intensive for DaVinci.

![Task Manager Performance tab is open. CPU usage shows 100% average. GPU usage shows 24% in average.](/media/2022/2022-03-12_15-19-38.png)

I wanted to give H265 a chance, and the result was surprising. CPU usage drops to 24%, and GPU goes up to an average of 87%. For some reason, DaVinci is encoding H264 on CPU, and H265 on GPU. Keep in mind that I'm on the free version of DaVinci that usually does not support GPU acceleration, but for some reason, [it does GPU encoding for H.265](https://forum.blackmagicdesign.com/viewtopic.php?f=21&t=149274).

![Task Manager Performance tab is open. CPU usage shows 24% average. GPU usage shows 87% in average.](/media/2022/2022-03-12_15-21-18.png)

What does this all mean? GPU vs. CPU game is always highly dependent on software compatibility. Therefore your particular workload test is critical to test out your system. In my case, for heavy workloads CPU is the bottleneck. Time will tell what the future holds and how future software and codecs might affect these tests.
