---
title: "Heap's Permutation Algorithm in Javascript"
layout: "post"
author: 
    name: "David Ernst"
---

Here's a js implementation I made for [Heap's Permutation Algorithm](http://en.wikipedia.org/wiki/Heap's_algorithm). This creates all possible permutations for you.

[Neil Lokare](http://www.neillokare.com/) and I needed this to create a Scrabble Solver, which takes a random grab bag of letters and finds all valid words.

<script src="https://gist.github.com/dsernst/2570de0dc7d44a8cbbd0.js"></script>


Here's an example:

`heapsPermute([1, 2, 3], console.log);`

prints:

<pre>
[1, 2, 3]  
[2, 1, 3]  
[3, 2, 1]  
[2, 3, 1] 
[3, 1, 2]  
[1, 3, 2]  
</pre>

The first argument to `heapsPermute(A, callback)` should be an array of values to permute. Each time it reaches a unique value it invokes the second argument: `callback`. The third argument is for an internal counter — don't use it when you call the function.

This algorithm runs in exponential time, and takes quite a while if you run it with an array longer than 10.