---
layout: post
title: Speed up your group workflow with Pull Requests from the Command Line
tags: [tips, git, unix, cli, programming, development]

---

When you're working with a tight knit team commiting to an upstream organization repository, you'll hopefully be making *lots* of pull-requests. But the GitHub Web UI isn't always the fastest way to do this, especially if you spend most of your time in a text editor and terminal anyway.

So I'd like to share a new simple tool I'm using which has significantly sped up my workflow. With the reduced friction, I'm making more contributions and having more fun doing it.

The magic lies in the [`hub` command-line client](https://github.com/github/hub), from GitHub, ht [@bcbcb](http://bren.me). This lets you make open a Pull Request using the same Git interface as making a commit.

![hub pull-request screenshot](/images/pull-request-from-terminal.png)

It will default to use your current branch as the "head" -- the branch the PR is coming *from* (I always forget which is which).

To make it even easier, I've added an alias to always use our upstream repo:
`alias gildedpr="hub pull-request -b hesistant-tapdancers:master"`. You might want something similar.

Other related handy tools for increasing your productivity:

* [TotalTerminal](http://totalterminal.binaryage.com/)
  * gives you a "visor" quick access to your Terminal. Comes in and out when you need it.
  * I set my `caps lock` key to Ctrl, so pressing `caps lock` twice activates it for me.
  * Thank you [@radiobeat33](https://github.com/radiobeat33) for showing me this handy app. It's awesome.
* If you're using a rebase workflow, you may want to `alias gprum="git pull --rebase upstream master"`
* And add `alias gpsuo="git push --set-upstream origin"` to make it easier to push up a new branch for the first time.

Hope this helps. Please share back any of your favorite tips for reducing the friction in your workflow.
