import { Request, Response } from 'express';
//import imageRoute from './Router/imageFile';


const ImageInputFolder = '../full/';

const loggerFunction = (req: Request, res: Response, next: Function) => {
    console.log(`Request IP: ${req.url}`);
    console.log(`Request date: ${new Date()}`);
    next()
};

const processImageFileFunction = (req: Request, res: Response, next: Function) => {
    let imageFile = "";
    
    next()
};