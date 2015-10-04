/* eslint-env browser, amd */

'use strict'

var yaml = require('yamljs')

yaml.load('data_favorite_quotes.yml', function (quotes) {
  var quote = quotes[Math.floor(Math.random() * quotes.length)]

  var blockquote = document.querySelectorAll('blockquote')[0]
  var cite = document.querySelectorAll('cite')[0]

  blockquote.textContent = quote.quote
  cite.textContent = quote.author || 'Unknown'
})
