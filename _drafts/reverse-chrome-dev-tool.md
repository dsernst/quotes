---
title: "Reverse in Chrome Dev Tools"
layout: "post"
author: 
    name: "David Ernst"
    url: "https://plus.google.com/108803078708042821188?rel=author"
---

chrome dev tools Reverse

The Developer Tools for Chrome lets you explore your scripts as they run. See the documents regarding "step over", "step in", and "step out"

How great it would be if you could step back in the Chrome Dev Tools!

But there's at least one major challenge to implementing this feature: How could the Dev Tools undo changes that have been made? It would be relatively easy to undo a statements like `i++;`, but what if a line had changed a string from something else entirely, overwriting the old value? How could the dev tools know what *used to be*, without running the whole program over again?

### Solution:
A button that says "step back", but under the hood it actually reruns the whole program, ignoring breakpoints, until it gets to the point just before where you were.
	* downsides: slow in some cases, but better than nothing.