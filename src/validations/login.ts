import Joi from 'joi';

export const login:{email:any, password: any} = {
    email: Joi.string().required(),
    password: Joi.string().min(8).required()
};