"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createImageFileName = function (path, width, height) {
    var byStr = 'X';
    var fileNameArr = path.split('.');
    return fileNameArr[0] + width + byStr + height + '.' + fileNameArr[1];
};
exports.default = createImageFileName;
