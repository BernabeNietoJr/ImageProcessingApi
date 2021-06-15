import fs from 'fs';
import path from 'path';

//const inputFolder =

const isFileExist = (filePath: string): boolean |  undefined => {
    
    try {
        return fs.existsSync(filePath);
    }
    catch(err){
        console.log(err);
    }

};

const isPathExist = (strFolderPath: string): boolean => {
    let retBool = false;

    return retBool;
    
}

export default { isFileExist, isPathExist} ;



