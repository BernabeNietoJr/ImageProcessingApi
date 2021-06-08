'use strict';
const __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const fs_1 = __importDefault(require('fs'));
const isFileExist = function(filePath) {
  try {
    return fs_1.default.existsSync(filePath);
  } catch (err) {
    console.log(err);
  }
};
exports.default = isFileExist;
