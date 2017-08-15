"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBranch;

var _erector = require("erector");

function* getBranch(cwd) {
  try {
    var data = yield (0, _erector.exec)("git branch | grep \\* | cut -d ' ' -f2", {
      cwd: cwd
    });
  } catch (e) {
    yield false;
  }
}
module.exports = exports["default"];