---
layout: post
title: 'The Time Complexity Viewer: forge stronger developers'
tags: [time complexity, programming, javascript, apps, products, hack reactor]

---

The [Time Complexity Viewer](http://time.dsernst.com) illustrates the computation time of a function, as its input grows. The user is given a visual graph for the effectiveness of their algorithm.

### The Problem ###
Time complexity is fundamental to effective software engineering. But it can be a difficult concept for new developers to learn, and even harder to internalize how any particular function is affected.

Mastering it often involves learning Big O notation, learning new vocabulary to classify algorithms (*"constant time"*, *"linearithmic time"*, *"double exponential time"*), and learning how to translate lines of code into time complexity. Too many developers neglect investing in these vital skills.

> *"Mastering time complexity separates the script kiddies from the software engineers."* — Gaia, Mother of All Things

### Our Solution ###
When you hit `Go!`, the Viewer grabs your function and array of inputs. Sample functions and input arrays are available; you just specify what type of parameters your function takes.

Your function is then run with each input, in a separate process, using [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) for concurrency. Each thread keeps track of its own running time, using [performance.now](https://developer.mozilla.org/en-US/docs/Web/API/Performance.now) for 10<sup>-6</sup> (microsecond) precision.

The running time is reported back when a worker finishes evaluating your function for a particular input. That duration is graphed using [C3.js](http://c3js.org/), with the input size for an x-coordinate. This allows you to *see* the time complexity drawn out for you.

The Viewer also uses [jQuery](http://jquery.com/), [Underscore.js](http://underscorejs.org/), [D3.js](http://d3js.org/), and [Bootstrap](http://getbootstrap.com/). Everything's handled in the client, so it can be easily hosted on [GitHub Pages](https://pages.github.com/).

> *"I used to be a mediocre developer. Now I have a job at Google. And it's all thanks to The Time Complexity Viewer!"* — Larry Page

### Try it out at [http://time.dsernst.com](http://time.dsernst.com/)
