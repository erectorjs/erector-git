'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBranchHoc;

var _erector = require('erector');

var getBranchExpr = /^\* ([^\n]+)/mi;

function* getBranchHoc() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      cwd = _ref.cwd;

  var branches = yield (0, _erector.exec)('git branch', cwd ? {
    cwd: cwd
  } : undefined);
  var branch = getBranchExpr.exec(branches);
  if (!branch) {
    throw new Error('No branch found');
  } else {
    yield branch[1];
  }
}
module.exports = exports['default'];