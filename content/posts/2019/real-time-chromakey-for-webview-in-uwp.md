---
Title: Real-Time ChromaKey for WebView in UWP
date: "2019-08-02" 
Tags: 
    - "Software"
    - "UWP"
---

![](/media/2019/20190802-banner.jpg)

A couple of days ago I had this crazy request "Can we make the browser transparent?". Let me give you some context :) At [Xogo](http://www.xogo.io/) we were ~~are~~ building a digital signage product. Our Windows Player is based on UWP. Soon, spoiler alert, we are going to announce a new feature where you can slice up the screen and have real-time browser content as part of the signage playback. So far so good :) The issue is that a browser session in UWP means a WebView and WebViews are rectangles. What if you wanted to change that? What if you could define transparency for part of the webview?

## The idea of ChromaKey

This is where the concept of ChromeKey came to my mind. This is an old idea I kept in the back of my mind since the days of [PixelShaders in Silverlight](https://www.microsoft.com/silverlight/pixel-shader/default). The implementation of PixelShaders in Silverlight was pretty easy. I started doing some research to see if that was available for UWP. My thinking was that there should be an easy way to tap into the rendering pipeline and implement a PixelShader to do pixel level transformation to achieve the ChromeKey effect. After 30 minutes of timeboxed effort, I found myself reading C++ documentations and had to stop!

## Win2D has a ChromaKeyEffect!

During my research I stumbled upon the Win2D library for UWP. It did have a [ChromeKeyEffect](https://docs.microsoft.com/en-us/windows/win32/direct2d/chromakey-effect) class, but [Windows.UI.Composition](https://docs.microsoft.com/en-us/uwp/api/windows.ui.composition?view=winrt-19041) didn't support it. That meant I could implement it for a static image, but not push that into the composition pipeline. What if… I did it myself? With some dirty game dev hat. 

## The dirty hack!

I started building this proof-of-concept UWP app with only two controls. My goal is to apply a ChromeKeyEffect close to real-time to the content that is visible in the browser and project it into the Image control. 

```xml
<Grid Margin="0,0,0,0">
    <Image x:Name="image" Height="400" VerticalAlignment="Center" 
	Width="400" HorizontalAlignment="Right"/>
    <WebView x:Name="web" Source="https://www.xogo.io" Width="400" 
	Height="400" HorizontalAlignment="Left">
    </WebView>        
</Grid>
```

To do that, I will take a render of the WebView, apply the ChromeKey, and flush it onto the Image control. I will keep doing that 24 frames per second :)

Make sure you get the [right Nuget package for Win2D](https://www.nuget.org/packages/Win2D.uwp/1.23.0?_src=template) into your project first. Next step is to get the render of the WebView.

```C#
var width = 400;
var height = 400;
var renderTargetBitmap = new RenderTargetBitmap();
await renderTargetBitmap.RenderAsync(web, width, height);
var pixels = await renderTargetBitmap.GetPixelsAsync();
```

In my case, being lazy, I strongly typed the size of render area. You shouldnt, I guess :) Once we got the pixels from the WebView it is time to move on.

```C#
var currentDpi = DisplayInformation.GetForCurrentView().LogicalDpi;
var imageSource = new CanvasImageSource(CanvasDevice.GetSharedDevice(), 
	width, height, currentDpi);

using (var drawingSession = imageSource.CreateDrawingSession(
	Colors.Transparent))
{
    using (var bitmap = CanvasBitmap.CreateFromBytes(
        drawingSession, pixels.ToArray(),
        width * Convert.ToInt32(currentDpi) / 96,
        height * Convert.ToInt32(currentDpi) / 96,
        DirectXPixelFormat.B8G8R8A8UIntNormalized, drawingSession.Dpi))
    {
        var chromaKeyEffect = new ChromaKeyEffect
        {
            Source = bitmap,
            Color = Color.FromArgb(255, 23, 180, 223),
            Feather = false
        };
        drawingSession.DrawImage(chromaKeyEffect);
    }
}
```

This is the fun part of the code. We are creating a drawing session, getting the bitmap, apply the ChromaKey, and draw it! In my case, the ChromaKey color is 23,180,223 RGB. 

The next step is to make sure we run this 24 frame a second at maximum. The reason I'm capping the rendering at 24fps is not to clog the system. 

```C#
public MainPage()
{
    this.InitializeComponent();
    CompositionTarget.Rendering += CompositionTarget_Rendering;
}

private static readonly TimeSpan updateInterval = TimeSpan.FromSeconds(1.0 / 24.0);
private readonly Stopwatch stopwatch = Stopwatch.StartNew();

private void CompositionTarget_Rendering(object sender, object e)
{
    if (this.stopwatch.Elapsed >= updateInterval)
    {
        this.stopwatch.Reset();
        this.stopwatch.Start();

        Draw(this, EventArgs.Empty);
    }
}
```

The one above is just a simple game/sprite render loop concept fitted into a UWP application. With this implementation, if the system can't handle 24fps, we will not push it to reach to that rendering speed, and we will not render more than 24fps if there is more compute performance available. Finally, the Draw method above is the one that holds our screenshot>key>flush code. 

<video width="680" autoplay loop muted poster="/media/2019/20190802-02.jpg" preload="auto" src="/media/2019/20190802-01.mp4"></video>

Above is the result we have! The performance is not that bad. It is pretty much acceptable for low interactivity scenarios. However, I'm not sure what you would get if you wanted to ChromaKey a MediaElement :) if you know what I mean.  I wish there was an easy way to get a PixelShader into the rendering pipeline. Maybe there is, and I wasn't able to find it in my 30 minutes timebox. Let me know if you know anything ;) Meanwhile, here is a link to [Win2D Github Issue](https://github.com/microsoft/Win2D/issues/713) for further updates about the topic.

Take care!