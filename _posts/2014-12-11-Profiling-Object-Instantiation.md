---
title: "Profiling Object Instantiation"
layout: "post"
---

For Hack Reactor, we were asked to create Stack and Queue data-structures, and then to instantiate them in different ways: a functional style, a functional-shared style (where methods are shared in memory), a prototypal style, and a pseudoclassical style.

[Andy Coenen](https://github.com/cannoneyed) and I then profiled the different methods to investigate their comparative speeds.

Here are our results -- lower bars are quicker:

<iframe width="494" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/1IPnqCHB9brDaC-q2IeIuelgSabHHicBcXgDdyE333ko/pubchart?oid=289190096&amp;format=interactive"></iframe>

<iframe width="494" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/1IPnqCHB9brDaC-q2IeIuelgSabHHicBcXgDdyE333ko/pubchart?oid=888667358&amp;format=interactive"></iframe>

<iframe width="494" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/1IPnqCHB9brDaC-q2IeIuelgSabHHicBcXgDdyE333ko/pubchart?oid=1750540861&amp;format=interactive"></iframe>

<iframe width="494" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/1IPnqCHB9brDaC-q2IeIuelgSabHHicBcXgDdyE333ko/pubchart?oid=399050057&amp;format=interactive"></iframe>

See the numbers here: [Instantiation Method Testing](https://docs.google.com/spreadsheets/d/1IPnqCHB9brDaC-q2IeIuelgSabHHicBcXgDdyE333ko/edit?usp=sharing)


Thanks to Hack Reactor for helping us along the way.