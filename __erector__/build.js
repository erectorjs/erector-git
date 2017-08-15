import { cliapp, echo, babelify, resolve } from 'erector';

export default cliapp({
  description: 'Build bundle',
  help: `Usage: erector build`,
  getInitialState(args) {
    return {
      watch: !!args.watch,
    };
  },
  worker: function* ({ watch }) {
    const src = yield resolve('./src/**/*.js');
    const dist = yield resolve('./dist');
    const channel = yield babelify(src, dist, {
      ignoreInitial: false,
      watch,
    });
    let stats;
    while(stats = yield channel) {
      yield echo.ok(`Build complete in ${stats.ms} ms.`);
    }
    return false;
  }
})
