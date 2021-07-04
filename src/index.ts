import express from 'express';
import imageRouter from './Router/imageRoute';
import errorApi from './utilities/ErrorHandling/ImageError';

const app = express();
const port = 3000;

//image resizing router
app.use('/api/images', imageRouter);

//error handling middleware
app.use('/', errorApi);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
