var compiler = require('./marked.min');
var renderer = new compiler.Renderer();
renderer.link = function(href, title, text) { return href; };

var parser = require('./parseFactory')(compiler, renderer);
module.exports = parser;
