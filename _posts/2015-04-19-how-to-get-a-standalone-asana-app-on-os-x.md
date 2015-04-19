---
layout: post
title: Howto get a standalone Asana app in OS X
tags: [tips, howto, Asana, OS X]
---

If you spend a lot of time in Asana, you might want a standalone app for it in your dock like this:

![Asana in Dock screenshot](/images/Asana-in-Dock-screenshot.png)

This is pretty easy, and takes only a minute or two to set up.

All you need to do is use the [free Fluid app](http://fluidapp.com/) to package the web app as a desktop app.

After you've downloaded and installed Fluid, run it and the "**Create a Fluid App**" window should appear.

For Asana, you're going to want these settings:

![Fluid Asana settings](/images/Fluid-Asana-settings.png)
​

> **URL:** `https://app.asana.com/`  
**Name:** `Asana`  
**Location:** `Applications`  
**Icon:** your pick!

You can use the default favicon, but on higher resolution devices it comes out fuzzy looking. I use [this sharp image](http://spigotdesign.com/wp-content/uploads/2015/01/asana.png) from [Bryan Hoffman](http://spigotdesign.com/asana-instagantt-fluid-icons/) at Spigot Design. [This one](http://asanatraining.com/wp-content/uploads/2014/02/asana-app-512.png) from [Todd Cavanaugh](http://asanatraining.com/?attachment_id=849) at Asana Training is also nice.

Another nice benefit of making Asana into a standalone app this way is that now you can quickly open it with Spotlight (or [Alfred](http://www.alfredapp.com/) etc) when you need it.

![Asana in Spotlight screenshot](/images/Asana-in-Spotlight-screenshot.png)

And of course, this method works the same for almost any webapp– Gmail, Trello, Github, Beeminder, whatever. It's especially handy when the creators haven't been able to make a native app themselves yet.

Hope this makes things easier for you.
