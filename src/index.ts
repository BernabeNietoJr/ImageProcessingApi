
import express from 'express';
import isFileExist from './utilities/StrHelper/fileVerifier';
import ResizeImage from './utilities/ImageProc/ImageResizer';

const app = express();
const port = 3000;

const inputFile = './full/fjord.jpg';

//app.use(express.urlencoded({extended:true}));

app.get('/convert',  (req,res, next) => {
  ResizeImage(inputFile, 200, 200);
  res.send('convert been accessed!');
  next();
});


// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

app.get('/dos/files', (req,res) => {
  let val = isFileExist(inputFile);
  res.send(val);
});

//app.use('/api/images', imageRouter);


