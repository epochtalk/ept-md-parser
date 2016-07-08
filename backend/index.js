var path = require('path');
var mdParser = require('marked');
module.exports = require(path.normalize(__dirname + '/../client/parseFactory'))(mdParser);
