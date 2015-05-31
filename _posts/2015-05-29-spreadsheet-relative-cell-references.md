---
layout: post
title: Spreadsheet relative cell references
tags: [Google Spreadsheets, Spreadsheet, tips, howto]
---

In Google Spreadsheets, you can refer to other cells relatively. Everyone knows about refering to cells with things like A1 or E6. And most people know how you can use the "Fill" function — dragging the lower right corner (or learn the keyboard shortcuts!) — to automatically generate the next cell in a relative way, so that `A4`, becomes `A5`, and `A6`, and so on.

![screenshot of dragging bottom right corner to Fill]()

But did you also know you can write a way to just directly refer to what spreadsheets interprets as "the cell right below me"? Or "right 3, down 2 from here"?

You do this with relative cell references.

Instead of using A1 notation, you use what's called R1C1 notation.

It's pretty easy. The R stands for "row"; the C is "column". If you want to refer to the cell 5 down and 7 to right, that'd be `R[5]C[7]`. Use negatives to go up rows, or to left columns: up one & left two is `R[-1]C[-2]`.

Make sense?

To use this in a spreadsheet, you need to wrap it in an `INDIRECT()` function call, because something. That INDIRECT function is used "to refer to cells indirectly, with strings". Its API looks like this:

![screenshot of INDIRECT() api]()

You'll need to set that second parameter – "A1 Notation" – to false. It defaults to `TRUE`.

So as a recap, to use this to refer to the cell 5 down and 7 to right, you'd say:

`=INDIRECT("R[5]C[7]", false)`

The `=` at the front is to indicate this is a function, and the `"quotation marks"` around the R1C1 notation is because the API expects a string.

-----------------------------------------------

Okay. I know that explanation was lengthier than we'd like, but now you basically know everything you need to know about using relative cell referencing.

So what is this good for?

In most cases, using Fill will suffice. It's quick and easy, and leaves clean code — much easier to maintain!

But sometimes you just can't use the Fill function. One example is with Conditional Formatting, where you'd like to apply one custom formula to a whole range. Another example is when you're inserting data programmating with Apps Script. Using a relative reference instead of depending on Fill allows you to only need a single formula that can be inserted into a large range.
