import fs from 'fs';

const isFileExists = (filePath: string): boolean => {
    let bool = false;
    fs.stat(filePath, (err, stats) =>{
        if (err) {
            console.error(err);
            bool = false;
        }
        else {
            bool = stats.isFile();
        }
            
    })
    return bool;
}

export default isFileExists;