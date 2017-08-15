import { exec } from 'erector';

export default function* getBranch(cwd) {
  try {
    const data = yield exec("git branch | grep \\* | cut -d ' ' -f2", {
      cwd,
    });
  } catch(e) {
    yield false;
  }
}
