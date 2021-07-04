import express, { NextFunction, Request, Response } from 'express';
import fs from 'fs';
import ResizeImage from '../utilities/ImageProc/ImageResizer';
import createImageFileName from '../utilities/StrHelper/fileNameCreator';
import path from 'path';

const router = express.Router();

const inputFolder = "./full/";
const outDir = './thumbs/';


router.get('/', ( req: Request, res: Response, next: NextFunction )  => {

    let { filename, width, height } = req.query;

    if (filename === undefined || filename === '' || !fs.existsSync(inputFolder + filename)) {
        res.status(404).send(`Image file not found: ${filename}`);
    }
    else if (width === undefined || width === '' ||   isNaN(Number(width)) || (Number(width) < 50) ) {
        res.status(400).send(`Invalid width for ${filename}`);
    }
    else if (height === undefined || height === '' || isNaN(Number(height)) || (Number(height) < 50) )  {
        res.status(400).send(`Invalid height for ${filename}`);
    }
    else { 

        let fname =  createImageFileName(filename.toString(), width.toString(), height.toString());
        let jpgFile = outDir + fname;
        
        if (fs.existsSync(jpgFile)) {

            jpgFile = path.resolve(__dirname, '..', '..' , 'thumbs', fname);
            res.sendFile(jpgFile);
            
        }
        else {

            let widthInt = Number(width);
            let heightInt = Number(height);
    
            ResizeImage(inputFolder + filename, widthInt, heightInt)

            jpgFile = path.resolve(__dirname, '..', '..', 'thumbs', fname);
            
            setTimeout ( () => { 
                // 1 sec delay before serving the resize image 
                res.sendFile(jpgFile);
            }, 1000);
            
        }
            
    }
    next;
});

export default router;
