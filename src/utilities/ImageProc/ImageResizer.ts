import sharp from 'sharp';
import createImageFileName from '../StrHelper/fileNameCreator';
import path from 'path';

const outFolder =  './thumbs/'
const thumbStr = '_thumbs';

const ResizeImage =  async (inputImg: string, width:number, height:number) => { 
    try {
        let fileObj = path.parse(inputImg);
        let imgFName = fileObj.name + thumbStr + fileObj.ext;

        let fname = createImageFileName(inputImg)

        await sharp(inputImg)
                .resize(width, height)
                .jpeg()
                .toFile(outFolder + imgFName)
                .then()
    } catch (err){
        console.log(err);
    }

}

export default ResizeImage;
