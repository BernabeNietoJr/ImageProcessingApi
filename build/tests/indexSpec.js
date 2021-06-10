"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fileNameCreator_1 = __importDefault(require("../utilities/StrHelper/fileNameCreator"));
// //let str = 'The quick brown fox';
// it('File should exists', () => {
//     expect(isFileExist('./full/fjord.jpg').toBeFalsy());
// });
it('Filename created', function () {
    expect(fileNameCreator_1.default('image.jpeg')).toEqual('imagethumbs.jpeg');
});
