var compiler;
var renderer;

function parse(input) {
  if (!input) { input = ''; }
  input = compiler(input, { renderer: renderer });
  return input;
}

module.exports = function(localCompiler, localRenderer) {
  compiler = localCompiler;
  renderer = localRenderer;
  return { parse: parse };
};
