var compiler;

function parse(input) {
  if (!input) { input = ''; }
  input = compiler(input);
  return input;
}

module.exports = function(localCompiler) {
  compiler = localCompiler;
  return { parse: parse };
};
