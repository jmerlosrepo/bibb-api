import CryptoJS from 'crypto-js';
import { PASS_KEY } from '../constants/security';

export const encryptAESText = (text:string):string => {
    console.log('PASS KEY', PASS_KEY);
    return CryptoJS.AES.encrypt(text, JSON.stringify(PASS_KEY)).toString();
}