import { echo, clear } from 'erector';

export { default as getRemoteUrl } from './helpers/getRemoteUrl';
export { default as getRemoteBranches } from './helpers/getRemoteBranches';
export { default as getRoot } from './helpers/getRoot';
export { default as getCurrentBranch } from './helpers/getCurrentBranch';

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

export default function* erectorGit(args) {
  yield introduce;
}
