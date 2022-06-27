import joi from 'joi';
import { login } from './login';

export const validateSchemas = (obj: object, schema: string) => {

   const {error, value} = joi.object(Object.keys(schemas).find( key => key === schema ) ).validate(obj);
   if(error) return {error, value: ''}
   return {error: '', value};
};

const schemas:{login:object} = {
    login: login
}