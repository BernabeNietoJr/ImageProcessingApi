"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//import isFileExist from './utilities/StrHelper/fileVerifier';
//import ResizeImage from './utilities/ImageProc/ImageResizer';
var imageRoute_1 = __importDefault(require("./utilities/Router/imageRoute"));
var ImageError_1 = __importDefault(require("./utilities/ErrorHandling/ImageError"));
//import path from 'path';
//import fs from 'fs';
//import { constants } from 'buffer';
var app = express_1.default();
var port = 3000;
app.use('/api/images', imageRoute_1.default);
app.use('/', ImageError_1.default);
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
// app.get('/sos', (req,res) => {
//   //let val = isFileExist(inputFile);
//   //res.sendFile('/thumbs/fjord.jpg');
//   //console.log(process.cwd());
// });
//app.get('/fath' ,(req, res) => {
//   let jpgFile = 'fjord400X400.jpg';
//   //let jpgFile = 'icelandwaterfall100X100.jpg';
//   //console.log(jpgFile);
//   //console.log(outputPath);
//   //res.render('image', { jpgFile: jpgFile });
//   //res.sendFile(outputPath + jpgFile);
//   try {
//     fs.access(outputPath + jpgFile, fs.constants.F_OK, () => {
//       console.log(jpgFile + ': Existing');
//       res.sendFile(outputPath +  jpgFile);
//     })
//   } catch(err) {
//     console.error('not existing');
//   }
// });
exports.default = app;
