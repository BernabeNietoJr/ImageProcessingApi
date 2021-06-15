import express from 'express';
import fs from 'fs';
import ResizeImage from '../ImageProc/ImageResizer';

const router = express.Router();
const inputFolder = "./full/";

router.get('/', ( req, res, next) => {

    let { filename, width, height} = req.query;
    
    if (filename === undefined || filename === '' || !fs.existsSync(inputFolder + filename)) {
        res.status(404).send(`Image file not found: ${filename}`);
        //next(throw new Error)
    }
    else if (width === undefined || width === '') {
        res.status(400).send(`No define width for ${filename}`);
    }
    else if (height === undefined || height === '') {
        res.status(400).send(`No define height for ${filename}`);
    }
    else { 
        let widthInt = Number(width);
        let heightInt = Number(height);
    
        ResizeImage(inputFolder + filename, widthInt, heightInt);
        next();
    }
});

export default router;