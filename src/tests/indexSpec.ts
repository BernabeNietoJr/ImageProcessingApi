import createImageFileName from '../utilities/StrHelper/fileNameCreator';
import ResizeImage from '../utilities/ImageProc/ImageResizer';
import path from 'path';
import isFileExists from '../utilities/StrHelper/FileChecker';

// //let str = 'The quick brown fox';

// it('File should exists', () => {
//     expect(isFileExist('./full/fjord.jpg').toBeFalsy());
// });

const inputPath = path.resolve('./full', 'palmtunnel.jpg')

it('Filename created', () => {
    expect(createImageFileName('image.jpeg', '200', '300')).toEqual('image200X300.jpeg');
});

it('File should exists', () => {
    expect(isFileExists('./full/fjord.jpg')).toBeFalsy();
});

//



// it('Image should be Resize', async function()  {
//     await ResizeImage(inputPath, 300, 400).toBeDefined();
// });


