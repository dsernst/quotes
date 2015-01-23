---
layout: post
title: The Time Complexity Viewer
tags: [time complexity, programming, javascript, apps, products, hack reactor]

---

## Forge stronger developers

This [game-changing product](http://time.dsernst.com) illustrates the computation time of a function, as its input grows. The user is given a visual graph for the effectiveness of their algorithm.

## The Problem ##
Time complexity is fundamental to effective software engineering. But it can be a difficult concept for new developers to learn, and even harder to internalize how any particular function is affected.

Mastering it often involves learning Big O notation, learning new vocabulary to classify algorithms (*"constant time"*, *"linearithmic time"*, *"double exponential time"*), and learning how to translate lines of code into time complexity. Too many developers neglect investing in these vital skills.

> *"Mastering time complexity separates the script kiddies from the software engineers."* — Gaia, Mother of All Things

## Our Solution ##
When you hit `Go!`, the application grabs your function and array of inputs. Sample functions and input arrays are available, but you still need to specify what type of parameters your function takes.

The function is then run for each input, in a separate process, using [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) for concurrency. Each thread keeps track of its own running time, using [performance.now](https://developer.mozilla.org/en-US/docs/Web/API/Performance.now) to get microsecond precision (10<sup>-6</sup>).

The running time is reported back when a worker finishes evaluating your function for a particular input. That duration is graphed with [C3.js](http://c3js.org/) to a scatter plot, with the input size for an x-coordinate. This allows you to *see* the time complexity drawn out for you.

The app also uses [jQuery](http://jquery.com/), [Underscore.js](http://underscorejs.org/), [D3.js](http://d3js.org/), and [Bootstrap](http://getbootstrap.com/). Everything's handled in the client, so it can be hosted easily on [GitHub Pages](https://pages.github.com/), for free.

## How to Get Started ##
All you have to do is load up [The Time Complexity Viewer](http://time.dsernst.com) in your favorite web browser & paste in a JavaScript function... then hold on to your seat!


## Customer Quote ##
> *"I used to be a mediocre developer. Now I have a job at Google. And it's all thanks to The Time Complexity Viewer!"* — Larry Page

Become a better developer, try out The Time Complexity Viewer today: [time.dsernst.com](http://time.dsernst.com/)
