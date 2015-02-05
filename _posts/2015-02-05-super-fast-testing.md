# Super fast testing, without needing tests #

### The importance of tight feedback loops ###

With most things in life, and especially programming, tight feedback loops are immensely useful. This means that you get a quick response if something is working or not working.

![image of tight feedback loop]

So here's what I do to get the quickest feedback from my development environment:


### Node build tool ###

First, I installed this node build tool for Sublime. I've tried a bunch of different approaches for this -- running in the browser, running in the node REPL, running in a site like JSBin / Pastebin, running with node, using JSC build tools (which uses the keywords `debug` instead of `console.log`) -- but I've found this approach seems to be the fastest and easiest.

See these instructions to install:

This allows me to just press `Command + B` when necessary. It's super easy.

* It's right in your editor, so you don't have to switch windows.
* You get to use all your familiar keyboard shortcuts like `Command + Backspace` to delete lines, `Command + /` to comment out lines, `Command + Ctrl + Up/Down` to move lines, and `Command + D` to select multiple instances of the same variable all at once.
* And the content isn't lost, like when running in the browser console or node repl, which makes re-running much easier.

### Quickly copying in examples ###
If a problem, colleague, or Continuous Integration suite gives you an example of a specific case, copy and paste it in!! Then you can use `option + mouse drag` or `Command + D` to edit multiple lines to fit exactly as needed.

### console.log autocompletions ###
This Javascript Console package for Sublime allows you to just type `>log` then press `tab` to auto-complete into `console.log('')`. Or `>error` for `console.error('')` etc. If you want a variable you can just press `backspace` once after the tab-completion

### JSLint / JSHint ###
I used to use Douglas Crockford's JSLint, which I found incredibly valuable. It was set to run every time I pressed Save.
I'm currently not using it because I switch over to experimenting with JSHint, but I'm ready to go back. Crockford has very strict opinions when it comes to code style, including things like whitespace and semi-colons, but if you don't like these they can be turned off by adding a flag in your preferences.



Hope you find these useful!






















# Other Blog Ideas: #

4 Memorable MVPs by other students
2 What's unique about living in San Francisco
1 What's great about Hack Reactor

5 The trouble with encouraging people to email a mailinglist like communication@
2 Useful skills to bring to Hack Reactor
