import { echo, clear } from 'erector';
import getRemoteUrl from './helpers/getRemoteUrl';
import getRemoteBranches from './helpers/getRemoteBranches';
import getRoot from './helpers/getRoot';
import getCurrentBranch from './helpers/getCurrentBranch';
import getCurrentBranchCommits from './helpers/getCurrentBranchCommits';
import getBranch from './helpers/getBranch';

function* introduce() {
  yield clear();
  yield echo(
`There are a set of **Erector** (http://github.com/morulus/erector) helpers for working with GIT.

**INCLUDES**:
- getRemoteUrl
- getRemoteBranches
- getRoot
- gitCurrentBranch

**INSTALLATION**:
npm i erector-git --S

**USAGE**:`);
  yield echo.note(`**import** {
  <module>,
} from '**erector-git**';
`
  )
}

function* erectorGit(args) {
  yield introduce;
}

erectorGit.getRemoteUrl = getRemoteUrl;
erectorGit.getRemoteBranches = getRemoteBranches;
erectorGit.getRoot = getRoot;
erectorGit.getCurrentBranch = getCurrentBranch;
erectorGit.getCurrentBranchCommits = getCurrentBranchCommits;
erectorGit.getBranch = getBranch;

export default erectorGit;
