import express, { Request, Response } from "express";

const errorApi = express();

errorApi.use( (err: Error, req: Request, res: Response, next: Function) => {
    if (err.message === 'Input fike contains unsupported image format') {
        res.status(404).send('Invalid image file format');
    }
    else {
        console.error(err);
        next(err);
    }
});

errorApi.use( (err: Error, req: Request, res: Response, next: Function) => {
    res.status(500).send('Internal Server Error');
});

// errorApi.use( (err: Error, req: Request, res: Response, next: Function) => {
//     if (err.message === 'Input fike contains unsupported image format') {
//         res.status(404).send('Invalid image file format');
//     }
//     console.error(err);
//     next(err);
// });

export default errorApi;