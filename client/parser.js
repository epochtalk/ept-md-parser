var compiler = require('./marked.min');
var renderer = new compiler.Renderer();
renderer.link = function(href, title, text) { return href; };
renderer.paragraph = function(text) { return text; };
var parser = require('./parseFactory')(compiler, renderer);
module.exports = parser;
