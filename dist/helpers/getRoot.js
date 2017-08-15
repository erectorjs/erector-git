'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRoot;

var _erector = require('erector');

function* getRoot(_ref) {
  var cwd = _ref.cwd;

  var root = yield (0, _erector.exec)('git rev-parse --show-toplevel', cwd ? {
    cwd: cwd
  } : undefined);
  yield root.trim();
}
module.exports = exports['default'];