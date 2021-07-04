"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var errorApi = express_1.default();
errorApi.use(function (err, req, res, next) {
    console.error(err);
    next(err);
});
errorApi.use(function (err, req, res, next) {
    res.status(500).send('Internal Server Error');
    next(err);
});
exports.default = errorApi;
