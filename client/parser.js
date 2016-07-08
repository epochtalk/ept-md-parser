var compiler = require('./marked.min');
var parser = require('./parseFactory')(compiler);
module.exports = parser;
