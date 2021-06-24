import express from 'express';
import fs from 'fs';
import ResizeImage from '../ImageProc/ImageResizer';
import createImageFileName from '../StrHelper/fileNameCreator';
import path from 'path';
import isFileExists from '../StrHelper/FileChecker';

const router = express.Router();

const inputFolder = "./full/";
const outDir = './public/thumbs/';

router.get('/', ( req, res, next) => {

    let { filename, width, height} = req.query;

    
    if (filename === undefined || filename === '' || !fs.existsSync(inputFolder + filename)) {
        res.status(404).send(`Image file not found: ${filename}`);
    }
    else if (width === undefined || width === '' ||   isNaN(Number(width))) {
        res.status(400).send(`No define width for ${filename}`);
    }
    else if (height === undefined || height === '' || isNaN(Number(height)))  {
        res.status(400).send(`No define height for ${filename}`);
    }
    else { 

        let widthInt = Number(width);
        let heightInt = Number(height);
    
        ResizeImage(inputFolder + filename, widthInt, heightInt);

        let fname =  createImageFileName(filename.toString(), width.toString(), height.toString());
        let jpgFile = "/thumbs/" + fname;
        
        //in case the resizing take longer to created the resize image
        setTimeout( () => {
            res.render('image', { jpgFile: jpgFile} );
        }, 1000);
        
        //console.log(fname);
        //next();
    }
    
});

export default router;