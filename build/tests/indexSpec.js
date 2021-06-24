"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fileNameCreator_1 = __importDefault(require("../utilities/StrHelper/fileNameCreator"));
var path_1 = __importDefault(require("path"));
var FileChecker_1 = __importDefault(require("../utilities/StrHelper/FileChecker"));
// //let str = 'The quick brown fox';
// it('File should exists', () => {
//     expect(isFileExist('./full/fjord.jpg').toBeFalsy());
// });
var inputPath = path_1.default.resolve('./full', 'palmtunnel.jpg');
it('Filename created', function () {
    expect(fileNameCreator_1.default('image.jpeg', '200', '300')).toEqual('image200X300.jpeg');
});
it('File should exists', function () {
    expect(FileChecker_1.default('./full/fjord.jpg')).toBeFalsy();
});
//
// it('Image should be Resize', async function()  {
//     await ResizeImage(inputPath, 300, 400).toBeDefined();
// });
