---
layout: post
title: A B-Tree in JavaScript
tags: [programming, data structures, javascript]
---

B-Trees are souped-up version of Binary Search Trees. These data structures allow for more than 2 children per node, which keeps the tree's depth more condensed & speeds up the time to traverse the tree.

Binary Search Trees have a lookup time complexity of `log(n) base 2`, where n is the number of stored items. B-Trees get a higher base value, defined as the 'order' of the tree, making for quicker lookups.

Here's [the basics of a B-Tree in JavaScript](https://github.com/dsernst/data-structures/blob/master/sprint-two/src/bTree.js), with accompanying unit tests. Written by Andy Coenen and myself.

It's got some handy methods like:

* `this.insert(value)` -- Insert the value into this, at the appropriate place, and handle rebalancing the tree.
* `this.print()` -- Print out an array of values of all nodes, depth first, including and descending from `this`.
* `this.multiInsert(val1, val2, val3, val4...)` -- Insert multiple values, instead of invoking `this.insert()` manually for each value. Takes multiple arguments, as many as needed.
* `this.printParents()` -- Like `this.print()`, but prints out `this.parent.values` of all nodes including and descending from `this`.

And here's a [super useful visualization](https://www.cs.usfca.edu/~galles/visualization/BTree.html) of how B-Trees work.