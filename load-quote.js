/* eslint-env browser, amd */

'use strict'

var yaml = require('yamljs')

yaml.load('quotes.yml', function (quotes) {
  var quote = quotes[Math.floor(Math.random() * quotes.length)]

  var blockquote = document.querySelectorAll('blockquote')[0]
  var cite = document.querySelectorAll('cite')[0]

  blockquote.innerHTML = quote.quote.replace(/\n\r?/g, '<br />')
  cite.textContent = quote.author || 'Unknown'
})
