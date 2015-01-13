---
layout: post
title: Bring Your Own Bash_Profile
tags: [unix, programming, tips, bash]
---

Inspired by [Josh Wyatt](https://github.com/joshWyatt)'s great Hack Reactor talk on Bash-Fu, I've been developing many of my own aliases to speed up my workflow.

But whenever I have to use the public workstations, I lose all my custom shortcuts.

With tons of help from [Eric Schmidt](https://github.com/eds101), we discovered a quick & easy way to import these aliases into any workstation.

I uploaded my `.bash_profile` to Github, and setup [bash.dsernst.com](http://bash.dsernst.com) as a shorter url redirect to it.

Then to get the aliases, just run from any terminal:

`curl -L bash.dsernst.com > tmp; . tmp`

Wondering what that does?

1. First, [curl](http://curl.haxx.se/) grabs the file at the given url. It needs the `-L` flag to follow the redirect from [http://bash.dsernst.com](http://bash.dsernst.com).

2. It writes the download to a file called `tmp`

3. Then it executes that `tmp` file to add all of the aliases. (If you're in ZSh, use `source` instead of `.`).

For better or worse, the aliases are only stored for the current session, so it doesn't leave a mess on the workstation.

If you've honed a specific workflow, it's really nice to be able to pull down your custom scripts on a remote machine.
