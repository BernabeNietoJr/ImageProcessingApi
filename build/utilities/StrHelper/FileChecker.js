"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var isFileExists = function (filePath) {
    var bool = false;
    fs_1.default.stat(filePath, function (err, stats) {
        if (err) {
            console.error(err);
            bool = false;
        }
        else {
            bool = stats.isFile();
        }
    });
    return bool;
};
exports.default = isFileExists;
