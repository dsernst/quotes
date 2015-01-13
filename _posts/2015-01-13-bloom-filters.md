---
layout: post
title: Bloom Filters
tags: [programming, javascript, data structures]
---

[Andy Coenen](https://github.com/cannoneyed) and I built a [Bloom Filter](https://en.wikipedia.org/wiki/Bloom_filter), a probabilistic filter used to speed up hash table lookups. Then we set up a testing page to analyze it's effectiveness.

Check that out here: [Analyze Bloom Filter](http://dsernst.com/data-structures/sprint-two/testBloomFilter.html)

Bloom Filter are best suited when you have a massive table of data -- millions and millions of entries -- because they let you make an educated guess about whether a particular value is contained in your datastore before looking it up. So a real world parallel would be to check with your library's catalogue to see if a book is in stock, before walking to find it.

One advantages of a Bloom Filter is that it's super space-efficient. The length of the filter, `m`, represents the number of bits that can turned on.

One downside of a Bloom Filters is that it's possible that lookup will give you a false positive result: the prediction model may say "yes, we probably have that key stored", even when it's not really there.

So our Bloom Filter Analysis page runs 10,000 tests which:

1. Create a random word.
2. Check if the Bloom Filter thinks it's contained.
3. Increment a False Positive counter if it wasn't really contained. 
4. After the 10,000 trials finish, the false positive rate is displayed as a percentage, along with [the theoretical expectation](https://en.wikipedia.org/wiki/Bloom_filter#Probability_of_false_positives) for a bloom filter of that size and density, so you can see how close our implementation stacks up.

What happens in the case of a false positive? Nothing terrible, it just means a lookup for that value will be run on the accompanying hash table, but that lookup will find nothing's really there.

The `n` variable represents the number of values that have been inserted already. As this number goes up, so does the false positive rate, because there's more likely to be hashing collisions.

An implementer could make the Bloom Filter even more memory efficient by adding more hashing functions, `k`, but this comes at a cost of speed, as each prediction and insertion requires calculating more index bits to turn on.

All in all, it was a fun thing to create, and a nice learning opportunity. Thanks Andy for being such a great partner, and Hack Reactor for the encouragement.
