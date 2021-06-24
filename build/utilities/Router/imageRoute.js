"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var ImageResizer_1 = __importDefault(require("../ImageProc/ImageResizer"));
var fileNameCreator_1 = __importDefault(require("../StrHelper/fileNameCreator"));
var FileChecker_1 = __importDefault(require("../StrHelper/FileChecker"));
var router = express_1.default.Router();
var inputFolder = "./full/";
var outDir = './public/thumbs/';
router.get('/', function (req, res, next) {
    var _a = req.query, filename = _a.filename, width = _a.width, height = _a.height;
    if (filename === undefined || filename === '' || !fs_1.default.existsSync(inputFolder + filename)) {
        res.status(404).send("Image file not found: " + filename);
    }
    else if (width === undefined || width === '' || isNaN(Number(width))) {
        res.status(400).send("No define width for " + filename);
    }
    else if (height === undefined || height === '' || isNaN(Number(height))) {
        res.status(400).send("No define height for " + filename);
    }
    else {
        var widthInt = Number(width);
        var heightInt = Number(height);
        ImageResizer_1.default(inputFolder + filename, widthInt, heightInt);
        var fname = outDir + fileNameCreator_1.default(filename.toString(), width.toString(), height.toString());
        if (FileChecker_1.default(fname))
            console.log(fname + " created");
        else
            console.log(fname + " was not created");
        res.send("<img src=" + fname + " >");
        //res.render('image', {fname: fname});
        //res.redirect('/img');
        console.log(fname);
        //next();
    }
});
exports.default = router;
