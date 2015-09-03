---
title: "Heap's Permutation Algorithm in Javascript"
layout: "post"
---

Here's a JavaScript implementation of [Heap's Permutation Algorithm](http://en.wikipedia.org/wiki/Heap's_algorithm), which finds all possible permutations of an array for you.

<script src="https://gist.github.com/dsernst/2570de0dc7d44a8cbbd0.js"></script>

Here's an example:

{% highlight javascript %}
heapsPermute([1, 2, 3], function(input){console.log(input);});
{% endhighlight %}

prints:

<pre>
[ 1, 2, 3 ]
[ 2, 1, 3 ]
[ 3, 1, 2 ]
[ 1, 3, 2 ]
[ 2, 3, 1 ]
[ 3, 2, 1 ]
</pre>

The first argument to `heapsPermute` should be an `array` of values to permute. The second argument, `output`, gets invoked on each unique value. The third argument is an internal counter — don't use it when you call the function.

This algorithm runs in factorial time, and takes quite a while if you run it with an array longer than 10 items. For example, n = 7 took my computer about 1 second; n = 8 took around 7 seconds; n = 9 took over a minute to print the [362880 different permutations](https://www.google.com/search?q=9!).

[Neil Lokare](https://github.com/nlokare) and I needed this to create a Scrabble Solver, which takes a random grab bag of letters and finds all valid words.
