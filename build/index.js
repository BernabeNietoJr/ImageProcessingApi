"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageRoute_1 = __importDefault(require("./utilities/Router/imageRoute"));
var ImageError_1 = __importDefault(require("./utilities/ErrorHandling/ImageError"));
var app = express_1.default();
var port = 3000;
app.use(express_1.default.static('public'));
app.set('views', './public/thumbs');
app.set('view engine', 'ejs');
//app.use(express.static(path.join(__dirname,'/thumbs')));
//app.set('views', path.join(__dirname, '/thumbs/'));
//let imgDir = path.resolve('/thumbs');
//const  inputFile = './/' + 'santamonica.jpg';
//app.use(express.urlencoded({extended:true}));
// app.get('/convert',  (req,res, next) => {
//   ResizeImage(inputFile, 300, 450);
//   res.send('convert been accessed!');
//   next();
// });
app.use('/api/images', imageRoute_1.default);
app.get('/img', function (req, res, next) {
    res.send("HI!!!");
    //next;
});
//app.get()
// app.get('/img' ,(req, res) => {
//   let imgDir = '/icelandwaterfall_thumbs.jpg';
//   //console.log( ' GET /dog.txt');
//   //res.render('/dos.txt');
//   res.render('image.ejs', { imgDir : imgDir });
//   // console.log(__dirname);
//   // console.log(path.join(__dirname, './thumbs', 'fjord_thumbs.jpg'));
// })
app.use('/', ImageError_1.default);
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
// app.get('/dos/files', (req,res) => {
//   //let val = isFileExist(inputFile);
//   res.send('/dos/files folder');
// });
// app.get('/fath' ,(req, res) => {
//   //res.send(path.parse(path.resolve('./full', 'dos.jpg')))
//   res.send(inputFile)
// });
