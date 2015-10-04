/* eslint-env browser */

var yaml = require('yamljs')

var quotes = yaml.load('data_favorite_quotes.yml')
var quote = quotes[Math.floor(Math.random() * quotes.length)]

var blockquote = document.querySelectorAll('blockquote')[0]
var cite = document.querySelectorAll('cite')[0]

blockquote.textContent = quote.quote
cite.textContent = quote.author || 'Unknown'
