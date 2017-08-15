'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCurrentBranchCommits;

var _erector = require('erector');

var fieldsToOptions = {
  hash: '%H',
  abbreviatedHash: '%h',
  treeHash: '%T',
  abbreviatedTreeHash: '%t',
  parentHashes: '%P',
  abbreviatedParentHashes: '%p',
  authorName: '%an',
  authorEmail: '%ae',
  authorDate: '%ad',
  authorRelativeDate: '%ar',
  commiterName: '%cn',
  commiterEmail: '%ce',
  commiterDate: '%cd',
  commiterRelativeDate: '%cr',
  subject: '%s'
};

function* getCurrentBranchCommits() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      cwd = _ref.cwd,
      _ref$options = _ref.options,
      options = _ref$options === undefined ? ['%H'] : _ref$options;

  var cmd = 'git log --pretty=format:"' + options.join("\t") + '"';
  var output = yield (0, _erector.exec)('git log --pretty=format:"' + options.join("\t") + '"', cwd ? {
    cwd: cwd
  } : undefined);
  yield output.split("\n").map(function (line) {
    return line.trim().split("\t");
  });
}
module.exports = exports['default'];