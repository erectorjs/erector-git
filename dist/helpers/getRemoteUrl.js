'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getGitRemoteUrl;

var _erector = require('erector');

function* getGitRemoteUrl() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      cwd = _ref.cwd;

  var origin = yield (0, _erector.exec)('git remote get-url origin', cwd ? {
    cwd: cwd
  } : undefined);
  var url = origin.trim();
  if (!url) {
    throw new Error("There is no remote url");
  }
  return url;
}
module.exports = exports['default'];