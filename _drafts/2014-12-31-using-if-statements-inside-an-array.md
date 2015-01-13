---
layout: post
title: Using `if` statements inside an array
---

Have you ever wanted to conditionally load content into an array?  In the same place you instantiate the array?

Normally javascript won't let you do this.  

> Syntax error unexpected if

But, Zach Lopez and I figured out a way to do this while building a chat client with BackboneJS. You have to wrap the if statement in an anonymous function that auto-invokes itself. Then anything that the anonymous function returns will be left in the array.

Here's an example:

`code code code`

This was handy so we could keep all the code in one place, where it was being used, instead of conditionally adjusting the array with jQuery after the fact.

One last caveat: The anonymous could return undefined, which would create a blank space in the array. This wasn't a problem for us, because we immediately called `join('')` on the array, but something to keep in mind.