import express from 'express';
import fs from 'fs';
import ResizeImage from '../ImageProc/ImageResizer';
import createImageFileName from '../StrHelper/fileNameCreator';
import path from 'path';

const router = express.Router();

const inputFolder = "./full/";
const outDir = './thumbs/';


router.get('/', ( req, res, next) => {

    let { filename, width, height } = req.query;

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

        let fname =  createImageFileName(filename.toString(), width.toString(), height.toString());
        let jpgFile = outDir + fname;
        
        if (fs.existsSync(jpgFile)) {

            jpgFile = path.resolve(__dirname, '..', '..' , '..', 'thumbs', fname);
            res.sendFile(jpgFile);
            
        }
        else {

            let widthInt = Number(width);
            let heightInt = Number(height);
    
            ResizeImage(inputFolder + filename, widthInt, heightInt)
            
            jpgFile = path.resolve(__dirname, '..', '..', '..', 'thumbs', fname);
            
            setTimeout ( () => { 
                // 100 mill sec delay before serving the resize image 
                res.sendFile(jpgFile);
            }, 100);
            
        }
            
    }
    next;
});

export default router;
