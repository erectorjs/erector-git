import { exec } from 'erector';
const fieldsToOptions = {
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
  subject: '%s',
};

export default function* getCurrentBranchCommits({
  cwd,
  options = ['%H'],
} = {}) {
  const cmd = `git log --pretty=format:"${options.join("\t")}"`;
  const output = yield exec(`git log --pretty=format:"${options.join("\t")}"`, cwd ? {
    cwd,
  } : undefined);
  yield output.split("\n").map(line => line.trim().split("\t"))
}
