---
layout: post
title: 'Google Apps Script: getSheetByIndex()'
tags: [coding, javascript, Google Apps Script, tips]
---

When you're using Google Apps Script to add advanced features to Google Spreadsheets, you may want to reference specific sheets by their index number in your list of sheets. There's a `Spreadsheet.getSheetByName()`, but no `Spreadsheet.getSheetByIndex()`. This seems like it should be there, and yet the API designers haven't included it. So what if you won't know the sheet name?!

Google searching doesn't turn up much on the subject, and there's nothing written about it on Stack Overflow either.

----------------------

Here's your workaround:

`Spreadsheet.getSheets()[index]`

`.getSheets()` returns the array of all sheets in your Spreadsheet, and then you can access the one you need by index with a traditional JavasScript array reference.

It seems so simple once you see this approach, but this had me hung up for much longer than I would have liked. Hopefully you won't have to go through the same struggle.

-----------------------

Here's a bonus of what you can use this for:

{% highlight javascript %}
function deleteLastNSheets(n) {
  for (var i = 0; i < n; i++) {
    spreadsheet.deleteSheet(spreadsheet.getSheets()[spreadsheet.getNumSheets() - 1]);
  }
}

function promptMultiSheetDelete() {
  var num = Browser.inputBox(
    'This will delete the last `n` sheets from your spreadsheet.',
    'How many do you want to delete?',
    Browser.Buttons.OK_CANCEL);

  // Did user click "OK"?
  if (num != 'cancel') {
    deleteLastNSheets(num);
  }
}

// Add a menu item for our new logic (onOpen is executed every time a Spreadsheet is loaded)
function onOpen() {
 spreadsheet.addMenu("Utilities", [
   {name: "Delete multiple sheets from back", functionName: "promptMultiSheetDelete"}
 ]);
}
{% endhighlight %}
