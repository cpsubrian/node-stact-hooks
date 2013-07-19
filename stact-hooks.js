var Stact = require('stact');

function createHooks (options) {
  var stacks = {};

  return function (name) {
    if (!stacks[name]) {
      stacks[name] = new Stact(options);
    }
    return stacks[name];
  };
}

module.exports = createHooks;