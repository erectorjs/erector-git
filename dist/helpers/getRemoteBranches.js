'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getGitRemoteBranches;

var _erector = require('erector');

var getBranchExpr = /^[\*]?[\s]+([^\n]+)/mi;
var getBranchDataExpr = /^-e ([^\s]+) ([^\s]+) ([^\s]+) ([^|]+)\|(.+)$/i;
var getBranchExprNoAliasExpr = /^[^\/]+\/(.+)$/mi;

function* getGitRemoteBranches() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      cwd = _ref.cwd,
      _ref$format = _ref.format,
      format = _ref$format === undefined ? 'short' : _ref$format;

  var branches = yield (0, _erector.exec)('for branch in `git branch -r | grep -v HEAD`;do echo -e `git show --format="%ci %cr" $branch | head -n 1`\\|$branch; done | sort', cwd ? {
    cwd: cwd
  } : undefined);
  yield branches.split("\n").map(function (line) {
    var parse = getBranchDataExpr.exec(line.trim());
    return parse && {
      data: parse[1],
      time: parse[2],
      timezone: parse[3],
      timePassed: parse[4],
      name: parse[5]
    };
  }).filter(function (branch) {
    return branch;
  }).map(function (branch) {
    switch (format) {
      case 'short':
        var pureBranchName = getBranchExprNoAliasExpr.exec(branch.name);
        return pureBranchName && pureBranchName[1];
        break;
      case 'long':
        return branch.name;
        break;
      case 'verbose':
      default:
        return branch;
        break;
    }
  });
}
module.exports = exports['default'];