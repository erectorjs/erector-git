'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _erector = require('erector');

var _getRemoteUrl = require('./helpers/getRemoteUrl');

var _getRemoteUrl2 = _interopRequireDefault(_getRemoteUrl);

var _getRemoteBranches = require('./helpers/getRemoteBranches');

var _getRemoteBranches2 = _interopRequireDefault(_getRemoteBranches);

var _getRoot = require('./helpers/getRoot');

var _getRoot2 = _interopRequireDefault(_getRoot);

var _getCurrentBranch = require('./helpers/getCurrentBranch');

var _getCurrentBranch2 = _interopRequireDefault(_getCurrentBranch);

var _getCurrentBranchCommits = require('./helpers/getCurrentBranchCommits');

var _getCurrentBranchCommits2 = _interopRequireDefault(_getCurrentBranchCommits);

var _getBranch = require('./helpers/getBranch');

var _getBranch2 = _interopRequireDefault(_getBranch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function* introduce() {
  yield (0, _erector.clear)();
  yield (0, _erector.echo)('There are a set of **Erector** (http://github.com/morulus/erector) helpers for working with GIT.\n\n**INCLUDES**:\n- getRemoteUrl\n- getRemoteBranches\n- getRoot\n- gitCurrentBranch\n\n**INSTALLATION**:\nnpm i erector-git --S\n\n**USAGE**:');
  yield _erector.echo.note('**import** {\n  <module>,\n} from \'**erector-git**\';\n');
}

function* erectorGit(args) {
  yield introduce;
}

erectorGit.getRemoteUrl = _getRemoteUrl2.default;
erectorGit.getRemoteBranches = _getRemoteBranches2.default;
erectorGit.getRoot = _getRoot2.default;
erectorGit.getCurrentBranch = _getCurrentBranch2.default;
erectorGit.getCurrentBranchCommits = _getCurrentBranchCommits2.default;
erectorGit.getBranch = _getBranch2.default;

exports.default = erectorGit;
module.exports = exports['default'];