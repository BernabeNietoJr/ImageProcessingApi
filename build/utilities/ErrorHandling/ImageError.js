"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var errorApi = express_1.default();
errorApi.use(function (err, req, res, next) {
    if (err.message === 'Input fike contains unsupported image format') {
        res.status(404).send('Invalid image file format');
    }
    else {
        console.error(err);
        next(err);
    }
});
errorApi.use(function (err, req, res, next) {
    res.status(500).send('Internal Server Error');
});
// errorApi.use( (err: Error, req: Request, res: Response, next: Function) => {
//     if (err.message === 'Input fike contains unsupported image format') {
//         res.status(404).send('Invalid image file format');
//     }
//     console.error(err);
//     next(err);
// });
exports.default = errorApi;
