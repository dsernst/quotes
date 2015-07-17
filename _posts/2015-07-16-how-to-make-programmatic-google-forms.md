---
layout: post
title: How to make programmatic Google Forms
tags: [tips, Google Forms, Google Apps Script, javascript, programming, howto]
---

Let's pretend you're making a survey. And you want to ask the same thing many times, with only the slightest modification.

What if you want to ask something like:

<pre>
*Apples*
Around how many apples have you eaten in your life?
- ( ) 0, I have never eaten one before.
- ( ) 1 - 10 apples
- ( ) 11 - 100 apples
- ( ) 100+ apples

Please describe apples: the taste, texture, and your overall feelings towards eating them.
----------------------------------------
|                                      |
|                                      |
|                                      |
|                                      |
|                                      |
----------------------------------------
</pre>

It's a silly example, but bear with me. Then maybe you also want to ask:

<pre>
*Bananas*
Around how many bananas have you eaten in your life?
- ( ) 0, I have never eaten one before.
- ( ) 1 - 10 bananas
- ( ) 11 - 100 bananas
- ( ) 100+ bananas

Please describe bananas: the taste, texture, and your overall feelings towards eating them.
----------------------------------------
|                                      |
|                                      |
|                                      |
|                                      |
|                                      |
----------------------------------------
</pre>

And so on, for kiwis, oranges, mangos, lemons, limes, grapes, strawberries, watermelons, cucumbers, pineapples, and more.

Well, you could spend an hour making each question by hand. Or, you could use [Google Apps Script](https://developers.google.com/apps-script/) to automate this sort of thing.

You just need two parts:

1. To grab your list of data from a Google Spreadsheet.
2. To make your template for Google Forms.

--------------------

### Part 1: Grabbing your data from a Spreadsheet

The goal here is to let your script know what data to replicate against. In our example above, it's the names of the fruit.

<img src="/images/fruit-names-spreadsheet.png" alt="screenshot of Spreadsheet list of fruit names" style="max-width: 400px;">

You can use this utility function to make grabbing this data really easy.

<script src="https://gist.github.com/dsernst/c63a06888ddd86da7869.js"></script>

This `getSpreadsheetData()` function takes the name of a worksheet, grabs all the data on the page, and gives you back an array of objects, using the first row for the property names. If you don't provide a sheetName parameter, it defaults to `Sheet1`.

![screenshot of array in memory from debug tools](/images/fruit-names-in-memory.png)
*Using the Apps Script debug tools to see the data in memory*

To add this code, open the Google App Script editor with **Tools > Script Editor**, choose **Blank project...**, and then paste this function in.

--------------------

### Part 2: Making the Google Form

Creating a Form with App Script is not too challenging. Here's how you'd make our example above:

{% highlight javascript %}
function makeOurForm() {
  var form = FormApp.create('Our fruit form')
  
  form.setDescription('This is an example of setting a description for our programmatically generated Form.');
  
  getSpreadsheetData().forEach(function (row) {
    var capitalizedName = row.Name.charAt(0).toUpperCase() + row.Name.slice(1);

    form.addSectionHeaderItem()
      .setTitle(capitalizedName);

    var item = form.addMultipleChoiceItem();
    item.setTitle('Around how many ' + row.Name + ' have you eaten in your life?')
      .setChoices([
        item.createChoice('0, I have never eaten one before'),
        item.createChoice('1 - 10 ' + row.Name),
        item.createChoice('11 - 100 ' + row.Name),
        item.createChoice('100+ ' + row.Name)
      ]);

    form.addParagraphTextItem()
      .setTitle('Please describe ' + row.Name + ': the taste, texture, and your overall feelings towards eating them.');
  });
}
{% endhighlight %}

That's it. Google Apps Script is pretty straightforward. For the most part, it's just Javascript with extra globals. And everything is synchronous, so it's very easy to reason about. The [Forms documation](https://developers.google.com/apps-script/reference/forms/form) covers tons of other methods, and overall the docs are pretty good! Feel free to ask if you have any questions.

<!-- By the way, in Apps Script you use `Logger.log` instead of `console.log`. Press `Cmd + Enter` to view the logs from the editor. -->

--------------------

### Finishing up

Now to make it work, just run the `makeOurForm()` function! You'll be asked to approve some permissions the first time it runs.

![screenshot of running a function in Google Apps Script](/images/run-makeOurForm-script.png)

And then you'll have a new Google Form in your Drive.

You can check out the [example Form we made here](https://docs.google.com/forms/d/1-PnU69dg82HuosYq6tqRbX-SNg7ujh7MhT4roHvj68s/viewform?usp=send_form), and here's [the Spreadsheet we used](https://docs.google.com/spreadsheets/d/1JmuXvn65pSV_F6uuY1_tb16cba9ltW29ZCbIUuNPmtk/edit?usp=sharing). To view the Apps Script code, open the Spreadsheet, then do **File > Make a copy...**, and then **Tools > Script Editor**.

<iframe src="https://docs.google.com/forms/d/1-PnU69dg82HuosYq6tqRbX-SNg7ujh7MhT4roHvj68s/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

I hope you found this a helpful lesson. Don't hesistate to reach out if you have any questions or need more help.
