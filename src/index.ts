import express from 'express';
//import isFileExist from './utilities/StrHelper/fileVerifier';
//import ResizeImage from './utilities/ImageProc/ImageResizer';
import  imageRouter from './utilities/Router/imageRoute';
import errorApi from './utilities/ErrorHandling/ImageError';
//import path from 'path';
//import fs from 'fs';
//import { constants } from 'buffer';

const app = express();
const port = 3000;

app.use('/api/images', imageRouter);

app.use('/', errorApi);


// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
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
export default app;



