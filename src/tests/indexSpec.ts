import createImageFileName from '../utilities/StrHelper/fileNameCreator';
import ResizeImage from '../utilities/ImageProc/ImageResizer';
import path from 'path';
import isFileExists from '../utilities/StrHelper/FileChecker';
import supertest from 'supertest';
import app from '../index';
import express from 'express';
//import  imageRouter from '../utilities/Router/imageRoute';


const inputPath = path.resolve('./full', 'palmtunnel.jpg')
const request = supertest(app);

it('Filename created', () => {
    expect(createImageFileName('image.jpeg', '200', '300')).toEqual('image200X300.jpeg');
});

it('File should exists', () => {
    expect(isFileExists('./full/fjord.jpg')).toBeFalsy();
});

it('get the api/images endpoint', async (done) => {
    const response = await request.get('/api/image?filename=fjord.jpg&width=250&height=200');
    expect(response.status).toBe(200);
    done();
});

