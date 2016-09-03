var path = require('path');
var mdParser = require('marked');
var renderer = new mdParser.Renderer();
renderer.link = function(href, title, text) { return href; };
module.exports = require(path.normalize(__dirname + '/../client/parseFactory'))(mdParser, renderer);
