var yaml = require('js-yaml')
var fs = require('fs')
var _ = require('lodash')

try {
  var doc = yaml.safeLoad(fs.readFileSync('./data_favorite_quotes.yml', 'utf8'));
  console.log(_.sample(doc));

} catch (e) {
  console.log(e);
}
