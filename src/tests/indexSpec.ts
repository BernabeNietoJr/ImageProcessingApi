import createImageFileName from '../utilities/StrHelper/fileNameCreator';
import supertest from 'supertest';
import app from '../index';
import express from 'express';
import ResizeImage from '../utilities/ImageProc/ImageResizer';
import fs from 'fs';

const request = supertest(app);

it('Filename created', () => {
    expect(createImageFileName('image.jpeg', '200', '300')).toEqual('image200X300.jpeg');
});


it('get the api/images endpoint', async (done) => {
    const response = await request.get('/api/images?filename=fjord.jpg&width=250&height=300');
    expect(response.status).toBe(200);
    done();
});

it('resize image function work', async () => {
    await ResizeImage('./full/santamonica.jpg', 200, 200);
    const resultBool = fs.existsSync('./thumbs/santamonica200X200.jpg')
    expect(resultBool).toEqual(true);
});

