"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
//const inputFolder =
var isFileExist = function (filePath) {
    try {
        return fs_1.default.existsSync(filePath);
    }
    catch (err) {
        console.log(err);
    }
};
var isPathExist = function (strFolderPath) {
    var retBool = false;
    return retBool;
};
exports.default = { isFileExist: isFileExist, isPathExist: isPathExist };
