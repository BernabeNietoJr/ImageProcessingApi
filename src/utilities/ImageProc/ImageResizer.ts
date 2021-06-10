import sharp from 'sharp';

const ResizeImage =  async (inputImg: string, width:number, height:number) => { 
    try {

        await sharp(inputImg)
                .resize(width, height)
                .jpeg()
                .toFile('./thumbs/output.jpeg')
                .then()
    } catch (err){
        console.log(err);
    }

}

export default ResizeImage;
