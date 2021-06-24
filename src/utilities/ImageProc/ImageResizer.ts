import sharp from 'sharp';
import path from 'path';

const outFolder =  './public/thumbs/'
//const thumbStr = '_thumbs';

const ResizeImage =  async (inputImg: string, width:number, height:number) => { 
    try {
        let fileObj = path.parse(inputImg);
        let widthStr = + width.toString(10);
        let heightStr = 'X' + height.toString(10);
        let imgFName = outFolder + fileObj.name + widthStr + heightStr + fileObj.ext;

        await sharp(inputImg)
                .resize(width, height)
                .jpeg()
                .toFile(imgFName)
    } catch (err){
        console.log(err);
    }

}

export default ResizeImage;
