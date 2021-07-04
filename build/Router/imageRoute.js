"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var ImageResizer_1 = __importDefault(require("../utilities/ImageProc/ImageResizer"));
var fileNameCreator_1 = __importDefault(require("../utilities/StrHelper/fileNameCreator"));
var path_1 = __importDefault(require("path"));
var router = express_1.default.Router();
var inputFolder = "./full/";
var outDir = './thumbs/';
router.get('/', function (req, res, next) {
    var _a = req.query, filename = _a.filename, width = _a.width, height = _a.height;
    if (filename === undefined || filename === '' || !fs_1.default.existsSync(inputFolder + filename)) {
        res.status(404).send("Image file not found: " + filename);
    }
    else if (width === undefined || width === '' || isNaN(Number(width)) || (Number(width) < 50)) {
        res.status(400).send("Invalid width for " + filename);
    }
    else if (height === undefined || height === '' || isNaN(Number(height)) || (Number(height) < 50)) {
        res.status(400).send("Invalid height for " + filename);
    }
    else {
        var fname = fileNameCreator_1.default(filename.toString(), width.toString(), height.toString());
        var jpgFile_1 = outDir + fname;
        if (fs_1.default.existsSync(jpgFile_1)) {
            jpgFile_1 = path_1.default.resolve(__dirname, '..', '..', 'thumbs', fname);
            res.sendFile(jpgFile_1);
        }
        else {
            var widthInt = Number(width);
            var heightInt = Number(height);
            ImageResizer_1.default(inputFolder + filename, widthInt, heightInt);
            jpgFile_1 = path_1.default.resolve(__dirname, '..', '..', 'thumbs', fname);
            setTimeout(function () {
                // 1 sec delay before serving the resize image 
                res.sendFile(jpgFile_1);
            }, 1000);
        }
    }
    next;
});
exports.default = router;
