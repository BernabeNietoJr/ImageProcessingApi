import express, { Request, Response } from "express";

const errorApi = express();

errorApi.use( (err: Error, req: Request, res: Response, next: Function) => {
    console.error(err);
    next(err);
});

errorApi.use( (err: Error, req: Request, res: Response, next: Function) => {
    res.status(500).send('Internal Server Error');
});

export default errorApi;