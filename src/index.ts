import express from 'express';
import isFileExist from './utilities/StrHelper/fileVerifier';
import ResizeImage from './utilities/ImageProc/ImageResizer';
import  imageRouter from './utilities/Router/imageRoute';
import errorApi from './utilities/ErrorHandling/ImageError';
import path from 'path';

const app = express();
const port = 3000;

//const inputFile = path.resolve('./full', 'santamonica.jpg');
const  inputFile = './full/' + 'santamonica.jpg';

//app.use(express.urlencoded({extended:true}));

// app.get('/convert',  (req,res, next) => {
//   ResizeImage(inputFile, 300, 450);
//   res.send('convert been accessed!');
//   next();
// });

app.use('/api/images', imageRouter);

app.use('/', errorApi);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

// app.get('/dos/files', (req,res) => {
//   //let val = isFileExist(inputFile);
//   res.send('/dos/files folder');
// });

// app.get('/fath' ,(req, res) => {
//   //res.send(path.parse(path.resolve('./full', 'dos.jpg')))
//   res.send(inputFile)
// });




