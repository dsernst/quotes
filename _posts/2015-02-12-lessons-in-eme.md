---
layout: post
title: Lessons in pay-per-stream content and the new Encrypted Media Extension standard
tags: [EME, HTML5, projects, Hack Reactor, web]

---

There's a controversial new technology that was only just finalized as an HTML5 Standard: Encrypted Media Extension, or EME for short. Sometimes it's called "DRM in the browser" (reminder: DRM is Digital Right Management -- or to some, Digital Restrictions Management).

## What's DRM?

DRM has long been used for offline media, like games and DVDs. This is what iTunes uses to keep songs from being passed around without paying for them. In the last few years, Netflix has brought it to the browser for their streaming video, by using Microsoft's Silverlight (Microsoft's alternative to Adobe Flash).

The goal of this technology is to keep you from downloading a file onto your own computer and sharing it, but to still be able to view and play it when the distributor says it's okay. This is done by encrypting the content-- so your machine downloads the encrpyted version, but only their special programs (Itunes, Silverlight, etc) are able to decrypt it. This is supposed to happen in a separate thread, or even on the GPU directly, so it can't be tampered with or copied.

## EME

But there were some problems with this: for one, each system has it's own requirements. Different hardware requires different decryption technologies. There's Apple FairPlay, Microsoft PlayReady, Google Widevine, Adobe Access, and more. And different devices come with different decryption systems. So it's a challenge to be able to play the same content, e.g. the same Netflix video, on different devices: Windows PCs, iPhones, Android phones, Playstations, and so on. This required huge engineering resources, and still didn't work on more obscure platforms like Linux, even though they have millions of potential customers.

This is where EME comes in. EME defines the standard for the file's meta-data about its encryption. It's an "Extension" for "Media", to deal with "Encyption". The idea for an EME world is that a media file can be encrypted just once, and each browser or playback device can figure out on its own how to handle it with the hardware's built-in decryption schemes.

## Tappy

So my Hack Reactor thesis partners agreed to explore the idea of building an application around this new standard. We wanted to allow content creators to publish and protect their work, set their own price, and directly earn a living by sharing their art.

We imagined a system where they could run their songs and videos through our program to encrypt it and allow them to set a per-stream price. They could embed this right on their own sites, instead of being forced onto platforms like iTunes, Amazon, or Spotify. Then whenever their audience sees the embed, they would be prompted to authorize the payment at the creator's price; once paid, the keyserver would send the appropriate decryption key so the content can be played right there.

We thought this would empower independent artists, enrich sustainable creative industries, and remove dependence on advertising.

But after exploring EME for a while, we became more aware of a number of large technical challenges:

1. encrypting the media-- almost all of the offerings are proprietary
2. setting up a key server-- there's very little documentation on this, and what is out there is jumbled legalese and overly technical specification documents
3. getting the EME working-- same challenges as above. Did I mention a lot of this was only published in the last week or two?

And then on top of this we saw some market challenges:

1. Would any creators want to use this? We spoke with a few and it wasn't super reassuring.
2. Why would the creator want to hand over payment control to us, a relatively unknown new player?
3. Why wouldn't the creator just put their content behind a paywall? This is what entertainers like Louis C.K. and Aziz Ansari have already done.

For this project, we've decided to pursue a different idea, which I look forward to being able to share it with you.

## Further readings
The official W3C spec for EME:
[http://w3c.github.io/encrypted-media/](http://w3c.github.io/encrypted-media/)

Youtube's announcement of going full HTML5
[http://youtube-eng.blogspot.com/2015/01/youtube-now-defaults-to-html5_27.html](http://youtube-eng.blogspot.com/2015/01/youtube-now-defaults-to-html5_27.html)

Youtube's testpage for HTML5 video support, including EME:
[https://www.youtube.com/html5](https://www.youtube.com/html5)

Wowza will handle all the encoding / encryption for you, on the their servers, for $95/mo per server needed:
[http://www.wowza.com/forums/content.php?580-How-to-secure-MPEG-DASH-streaming-using-Common-Encryption-(CENC)](http://www.wowza.com/forums/content.php?580-How-to-secure-MPEG-DASH-streaming-using-Common-Encryption-(CENC))

Unified Streaming is another commercial offering:
[http://docs.unified-streaming.com/documentation/protect/common-encryption.html](http://docs.unified-streaming.com/documentation/protect/common-encryption.html)
[http://www.unified-streaming.com/solutions/cases/widevine-modular-drm-cenc](http://www.unified-streaming.com/solutions/cases/widevine-modular-drm-cenc)

Demo of EME with free WebM video:
[http://downloads.webmproject.org/demos/adaptive-eme/index.html](http://downloads.webmproject.org/demos/adaptive-eme/index.html)

HTML5 Video at Netflix:
[http://techblog.netflix.com/2013/04/html5-video-at-netflix.html](http://techblog.netflix.com/2013/04/html5-video-at-netflix.html)

Google thinking about Paid Video content in Chrome:
[https://docs.google.com/presentation/d/1WWIe6ExAmkQhjYF7m62SiKA8TB7p36LeHwInDIVtwL8/](https://docs.google.com/presentation/d/1WWIe6ExAmkQhjYF7m62SiKA8TB7p36LeHwInDIVtwL8/)

webM crypt-- to encrypt WebM video, only provides install instructions for linux and windows:
[https://code.google.com/p/webm/source/browse/webm_crypt/?repo=webm-tools#webm_crypt](https://code.google.com/p/webm/source/browse/webm_crypt/?repo=webm-tools#webm_crypt)

Zencoder is another Encrpyted Encoding as a Service offering:
[https://zencoder.com/en/](https://zencoder.com/en/)
