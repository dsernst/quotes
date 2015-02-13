---
layout: post
title: Lessons in pay-per-stream content and the new Encrypted Media Extension standard
tags: [EME, HTML5, projects, Hack Reactor, web]

---

There's a controversial new technology that was only just finalized as an HTML5 Standard: Encrypted Media Extension, or EME for short. Sometimes it's called "DRM in the browser".

## What's DRM?

DRM is Digital Rights Management -- or to some, Digital Restrictions Management.

DRM has long been used for offline media, like games and DVDs. It's what iTunes uses to keep songs from being passed around without paying for them, or digital rentals to expire on time. In the last few years, Netflix has brought it to the browser for their streaming video, by using Microsoft's Silverlight, the Microsoft alternative to Adobe Flash.

These technologies are meant to keep you from downloading a file onto your own computer and sharing it, but to still be able to view and play it when the distributor says it's okay. This is done by encrypting the content-- so your machine downloads the encrpyted version, but only their special programs (iTunes, Silverlight, etc) are able to decrypt and run it. In some cases, this happens in a separate thread, or even on the GPU directly, so it can't be tampered with or copied.

## EME

But there were some problems with using this online: for one, each system has it's own requirements. Different hardware requires different decryption technologies. There's Apple FairPlay, Microsoft PlayReady, Google Widevine, Adobe Access, and more. And different devices come with different decryption systems. So it's a challenge to be able to play the same content, e.g. the same Netflix video, on different devices: Windows PCs, iPhones, Android phones, Playstations, and so on. This required huge engineering resources, and still didn't work on more obscure platforms like Linux, even though they have millions of potential customers.

This is where EME comes in. EME defines the standard for the file's encryption metadata. It's an "Extension" for "Media", to deal with "Encryption". In a world with the EME standard, a media file can be encrypted just once, and each browser or playback device can figure out on its own how to handle it with the hardware's built-in decryption schemes.

## Tappy

So my Hack Reactor thesis partners agreed to explore the idea of building an application around this new standard. We wanted to allow content creators to publish and protect their work, set their own price, and directly earn a living by sharing their art.

We imagined a system where they could run their songs and videos through our program to encrypt it and allow them to set a per-stream price. Then they could embed their files right on their own sites, instead of being forced onto platforms like iTunes, Spotify, or Amazon. Whenever their audience sees the embed, they would be prompted to authorize the payment at the creator's price. Once paid, the keyserver would send the appropriate decryption key so the content can be played right there.

We hoped this would empower independent artists, enrich sustainable creative industries, and weaken dependence on advertising.

But after exploring EME for a while, we became more aware of a number of large technical challenges:

1. Encrypting the media-- almost all of the encryption offerings are proprietary
2. Setting up a key server-- there's very little documentation on this, and what is out there is jumbled legalese and overly technical specification documents
3. Getting the EME working-- same challenges as with the key server. Did I mention most of the information about EME was only published in the last week or two?

And then on top of this we saw some market challenges:

1. Would creators want to use this? We spoke with a few and it wasn't super reassuring.
2. Why would the creator want to hand over payment control to us, a relatively unknown new player?
3. Why wouldn't the creator just put their content behind a paywall? This is what entertainers like Louis C.K. and Aziz Ansari have already done.

So for this thesis project, we've decided save EME for another day. Instead, we'll pursue a different idea, which I look forward to share with you.

Feel free to leave a comment below. Thanks.

## Further readings
The official W3C spec for EME:
[http://w3c.github.io/encrypted-media/](http://w3c.github.io/encrypted-media/)

Youtube's announcement of going full HTML5
[http://youtube-eng.blogspot.com/2015/01/youtube-now-defaults-to-html5_27.html](http://youtube-eng.blogspot.com/2015/01/youtube-now-defaults-to-html5_27.html)

Youtube's testpage for HTML5 video support, including EME:
[https://www.youtube.com/html5](https://www.youtube.com/html5)

Wowza will handle all the encoding / encryption for you, on their servers, for $95/mo per server needed:
[http://www.wowza.com/forums/content.php?580-How-to-secure-MPEG-DASH-streaming-using-Common-Encryption-(CENC)](http://www.wowza.com/forums/content.php?580-How-to-secure-MPEG-DASH-streaming-using-Common-Encryption-(CENC))

Unified Streaming is another commercial offering:
[http://docs.unified-streaming.com/documentation/protect/common-encryption.html](http://docs.unified-streaming.com/documentation/protect/common-encryption.html)
[http://www.unified-streaming.com/solutions/cases/widevine-modular-drm-cenc](http://www.unified-streaming.com/solutions/cases/widevine-modular-drm-cenc)

Demo of EME with free WebM video:
[http://downloads.webmproject.org/demos/adaptive-eme/index.html](http://downloads.webmproject.org/demos/adaptive-eme/index.html)

HTML5 Video at Netflix:
[http://techblog.netflix.com/2013/04/html5-video-at-netflix.html](http://techblog.netflix.com/2013/04/html5-video-at-netflix.html)

Google is thinking about Paid Video content in Chrome:
[https://docs.google.com/presentation/d/1WWIe6ExAmkQhjYF7m62SiKA8TB7p36LeHwInDIVtwL8/](https://docs.google.com/presentation/d/1WWIe6ExAmkQhjYF7m62SiKA8TB7p36LeHwInDIVtwL8/)

webM crypt -- to encrypt WebM video. Only provides install instructions for Linux and Windows:
[https://code.google.com/p/webm/source/browse/webm_crypt/?repo=webm-tools#webm_crypt](https://code.google.com/p/webm/source/browse/webm_crypt/?repo=webm-tools#webm_crypt)

Zencoder is another Encrypted-Encoding-as-a-Service offering:
[https://zencoder.com/en/](https://zencoder.com/en/)
