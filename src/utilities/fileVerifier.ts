import fs from 'fs';

const isFileExist = (filePath: string): boolean | undefined => {
    
    try {
        return fs.existsSync(filePath)
    }
    catch(err){
        console.log(err);
    }

};

export default isFileExist;

