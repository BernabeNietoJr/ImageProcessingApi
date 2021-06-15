import createImageFileName from '../utilities/StrHelper/fileNameCreator';
import ResizeImage from '../utilities/ImageProc/ImageResizer';
import path from 'path';

// //let str = 'The quick brown fox';

// it('File should exists', () => {
//     expect(isFileExist('./full/fjord.jpg').toBeFalsy());
// });

const inputPath = path.resolve('./full', 'palmtunnel.jpg')

it('Filename created', () => {
    expect(createImageFileName('image.jpeg')).toEqual('imagethumbs.jpeg');
});

// it('Image should be Resize', async function()  {
//     await ResizeImage(inputPath, 300, 400).toBeDefined();
// });


