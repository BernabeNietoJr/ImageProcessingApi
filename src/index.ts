
import express from 'express';
import isFileExist from './utilities/fileVerifier';

const app = express();
const port = 3000;

const inputFile = './full/fjord.jpg';


app.get('/convert', (req,res) => {
  res.send('convert been accessed!');
});


// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

app.get('/dos/images', (req,res) => {
  let val = isFileExist(inputFile);
  res.send(val);
});