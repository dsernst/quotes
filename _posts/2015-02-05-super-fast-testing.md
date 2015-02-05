---
layout: post
title: Super fast Sublime testing, without needing tests
tags: [testing, programming, javascript, ide, tips, node]
---

With most things in life, and especially programming, tight feedback loops are immensely useful. This means that you get a quick response if something is working or not working.

![image of tight feedback loop](/images/bml-loop-2-1.png)

So here's what I do to get the quickest feedback from my development environment.


### Node build tool ###

First, I installed a node.js build tool for Sublime. I've tried a bunch of different approaches here -- running in the browser, running in the node REPL, running in a site like JSBin / Pastebin, using node to execute `.js` files, using the JSC build tool (which requires `debug` instead of `console.log`) -- but I've found using node in Sublime seems to be the fastest and easiest.

See these instructions to install: [**Method 2** of How to Create a Javascript Console in Sublime Text](http://www.wikihow.com/Create-a-Javascript-Console-in-Sublime-Text)

This allows me to just press `Command + B` when necessary. It's super easy.

* It's right in your editor, so you don't have to switch windows.
* You get to use all your familiar keyboard shortcuts like `Command + Backspace` to delete lines, `Command + /` to comment out lines, `Command + Ctrl + Up/Down` to move lines, and `Command + D` to select multiple instances of the same variable all at once.
* And the content isn't lost, like when running in the browser console or node repl, which makes re-running much easier.

### Quickly copying in examples ###

If a problem, colleague, or [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) suite gives you an example of a specific input case, copy and paste it in!! You can use `Option + mouse drag`, `Command + mouse click`, or `Command + D` to edit multiple lines to fit exactly as needed.

### console.log autocompletions ###

This [Javascript Console package](https://packagecontrol.io/packages/JavaScript%20Console) for Sublime allows you to just type `>log` then press `tab` to auto-complete into `console.log('')`. You can also do `>error` + `tab` for `console.error('')`, etc.

A minor detail that I love about this: if you only want to print a variable, just press `backspace` once after the tab-completion and both of the quotes are removed.

### Linters ###

Linters are static code analyzers that check for common errors, without executing anything.

I was using Douglas Crockford's [JSLint](https://packagecontrol.io/packages/JSLint), which I found incredibly valuable. It was set to run on every save. It's like having a super developer beside you, whispering hints to you any time something looks a little off.

I switched over to [JSHint](https://github.com/uipoet/sublime-jshint) as an experiment, but I'm ready to go back. I haven't found it nearly as useful.

Crockford has very strict opinions when it comes to code style, including details like whitespace and semi-colons, but if you don't like these they can be adjusted with a flag in your preferences.

--------------

Hope you find these useful! Feel free to share any tips or experience you've had in the comments.
