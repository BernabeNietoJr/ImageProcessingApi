import createImageFileName from '../utilities/StrHelper/fileNameCreator';

// //let str = 'The quick brown fox';

// it('File should exists', () => {
//     expect(isFileExist('./full/fjord.jpg').toBeFalsy());
// });

it('Filename created', () => {
    expect(createImageFileName('image.jpeg')).toEqual('imagethumbs.jpeg');
});
