"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fileVerifier_1 = __importDefault(require("./utilities/StrHelper/fileVerifier"));
var ImageResizer_1 = __importDefault(require("./utilities/ImageProc/ImageResizer"));
var app = express_1.default();
var port = 3000;
var inputFile = './full/fjord.jpg';
//app.use(express.urlencoded({extended:true}));
app.get('/convert', function (req, res, next) {
    ImageResizer_1.default(inputFile, 200, 200);
    res.send('convert been accessed!');
    next();
});
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
app.get('/dos/files', function (req, res) {
    var val = fileVerifier_1.default(inputFile);
    res.send(val);
});
//app.use('/api/images', imageRouter);
