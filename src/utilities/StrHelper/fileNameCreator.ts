const createImageFileName = (path:string):string => {

    const strToAddToImageFileName = 'thumbs.';

    let fileNameArr = path.split('.');

    return fileNameArr[0] + strToAddToImageFileName + fileNameArr[1];

};

export default createImageFileName;