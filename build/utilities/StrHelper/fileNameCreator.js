"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createImageFileName = function (path) {
    var strToAddToImageFileName = 'thumbs.';
    var fileNameArr = path.split('.');
    return fileNameArr[0] + strToAddToImageFileName + fileNameArr[1];
};
exports.default = createImageFileName;
