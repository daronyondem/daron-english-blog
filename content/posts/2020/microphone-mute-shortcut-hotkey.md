---
Title: "Mute your microphone with a keyboard shortcut"
date: "2020-06-24" 
Tags: 
    - "Software"
    - "Tips"
---

Online audio meetings are not news to my life, but full-day online training is! Recently, I found myself in the instructor chair for multi-day online training events. That changed my primary audio device, iPhone. For years, and still, I do all my online meetings on my iPhone with my AirPods. I love how consistent and convenient the software and hardware combination is. If you are in a meeting with me where I have to share my desktop, you will see two instances of me at the conference. One, from my iPhone for audio, and another from the desktop just for desktop sharing, no sound. This practice worked well for me. Having audio on the phone, I don't get tied to my desktop If I have to leave the sight of my computer for a moment. 

With all that, full-day training is different. Headphones on for a full day sucks. So, I ended up using my [desktop microphone](https://amzn.to/37YxS8U) and webcam for the online training sessions I hosted recently. That changed my relationship with the Microphone Mute button. When you are on your phone, the application you are using for audio communication is always on screen. It is relatively easy to mute/unmute. However, if you have sound on PC, the application that controls that functionality might be gone to the background. To mute yourself, first, you have to bring the app back to the screen and hit Mute. I know some applications have overlays with some operational buttons, but who does not minimize it if desktop sharing is in progress?

So long for the problem statement :) I wish there was a hardware button on my keyboard to mute my microphone. I have one for speakers, but not for a microphone. Interestingly, even Windows does not have Mute for input devices, in close UI proximity :)

![](/media/2020/2020-06-24_9-00-12.png)

Let's start with the easy part. My keyboard has already custom macro buttons on it. Unfortunately, the built-in software has nothing to offer to mute a microphone. That's where the [SoundVolume app from Nirsoft](http://www.nirsoft.net/utils/sound_volume_view.html) comes in. The app has a nice UI and can work from the command-line as well. Moreover, it can create you shortcuts to manage your audio devices.

![](/media/2020/2020-06-24_9-05-32.png)

Once you open the app, you can see a list of all audio devices on your machine. In my case, I selected my [Yeti Mic](https://amzn.to/37YxS8U) and created a shortcut to switch microphone mute on and off. If you look at the details of the shortcut, here is what you will see.

```cli
SoundVolumeView.exe /Switch "Yeti Stereo Microphone\Device\Microphone\Capture"
```

![](/media/2020/2020-06-24_9-09-36.png)

If your keyboard does not offer the same functionality, you might want to look at [AutoHotKey](https://www.autohotkey.com/docs/commands/Run.htm) to map your shortcut to a key combination.

The only drawback of this workaround is that there is no visual clue in the UI of the OS or the apps you are using. It's hard to figure out if you are already on Mute or not. For that case, I changed my implementation into having two separate shortcuts to Mute and Unmute. At least, I can bang the right keys for the right functionality without worrying of the state of the toggle :)

Hope this helps!