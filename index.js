var yaml = require('js-yaml')
var fs = require('fs')

try {
  var doc = yaml.safeLoad(fs.readFileSync('./data_favorite_quotes.yml', 'utf8'));
  console.log(doc);
} catch (e) {
  console.log(e);
}
