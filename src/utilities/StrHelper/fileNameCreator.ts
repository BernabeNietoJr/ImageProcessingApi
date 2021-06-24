const createImageFileName = (path:string, width: string, height: string):string => {

    const byStr = 'X';

    let fileNameArr = path.split('.');

    return fileNameArr[0]  + width + byStr + height + '.' + fileNameArr[1];

};

export default createImageFileName;