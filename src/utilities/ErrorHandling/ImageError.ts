import express, { NextFunction, Request, Response } from "express";

const errorApi = express();

errorApi.use( (err: Error, req: Request, res: Response, next: NextFunction) => {
    
    console.error(err);
    next(err);
    
});

errorApi.use( (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send('Internal Server Error');
    next(err);
});

export default errorApi;