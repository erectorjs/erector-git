import { exec } from 'erector';

export default function* getGitRemoteUrl({ cwd } = {}) {
  const origin = yield exec('git remote get-url origin', cwd ? {
    cwd,
  } : undefined);
  const purl = getAddrFromOriginExpr.exec(origin.trim());
  const url = purl.trim();
  if (!url) {
    throw new Error("There is no remote url");
  }
  return url;
}
