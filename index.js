var _ = require('lodash')
var YAML = require('yamljs')

try {
  var doc = YAML.load('data_favorite_quotes.yml')
  console.log(_.sample(doc));
} catch (e) {
  console.log(e);
}
