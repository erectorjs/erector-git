import { exec, echo } from 'erector';

const getBranchExpr = /^[\*]?[\s]+([^\n]+)/mi;
const getBranchDataExpr = /^-e ([^\s]+) ([^\s]+) ([^\s]+) ([^|]+)\|(.+)$/i;
const getBranchExprNoAliasExpr = /^[^\/]+\/(.+)$/mi;

export default function* getGitRemoteBranches({ cwd, format = 'short' } = {}) {
  const branches = yield exec('for branch in `git branch -r | grep -v HEAD`;do echo -e `git show --format="%ci %cr" $branch | head -n 1`\\|$branch; done | sort', cwd ? {
    cwd,
  } : undefined);
  yield branches.split("\n")
  .map((line) => {
    const parse = getBranchDataExpr.exec(line.trim());
    return parse && {
      data: parse[1],
      time: parse[2],
      timezone: parse[3],
      timePassed: parse[4],
      name: parse[5]
    };
  })
  .filter(branch => branch)
  .map((branch) => {
    switch (format) {
      case 'short':
        const pureBranchName = getBranchExprNoAliasExpr.exec(branch.name);
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
