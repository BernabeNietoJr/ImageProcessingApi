import express from 'express';
import isFileExist from './utilities/StrHelper/fileVerifier';
import ResizeImage from './utilities/ImageProc/ImageResizer';
import  imageRouter from './utilities/Router/imageRoute';
import errorApi from './utilities/ErrorHandling/ImageError';
import path from 'path';

const app = express();
const port = 3000;


app.use(express.static('public'));

app.set('views', './public/thumbs');
app.set('view engine', 'ejs');



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

app.get('/fath' ,(req, res) => {
  let jpgFile = '/thumbs/palmtunnel400X300.jpg';
  console.log(jpgFile);
  res.render('image', { jpgFile: jpgFile });
});



