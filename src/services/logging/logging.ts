import { appendFile, open, existsSync, mkdirSync } from 'fs';
import { getToday, getTime } from '../../helpers/dates';
import path from 'path';


export const createLog = (code:number, message:string):void => {
    let baseDir = path.join(__dirname, '/../../logs/');
    let logText = `${getTime()} - ${code}: ${message}\r\n`;
    let fileName =`${baseDir}bibb-log-${getToday()}.log`;

    if (!existsSync(baseDir)){
        mkdirSync(baseDir);
        open(fileName, 'wx',(err) => {
            if(err) throw err;
            writeToFile(fileName, logText);
        });
        return;
    }
    writeToFile(fileName, logText);

}

const writeToFile = (fileName:string, text:string):void => {
    appendFile(fileName,text, (err) => {
        if(err) throw err;
        console.log(`${getToday()} ${text}`);
    })
}