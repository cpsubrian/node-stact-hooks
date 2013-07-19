var createStact = require('stact');

function createHooks (options) {
  var stacks = {};

  return function (name) {
    if (!stacks[name]) {
      stacks[name] = createStact(options);
    }
    return stacks[name];
  };
}

module.exports = createHooks;