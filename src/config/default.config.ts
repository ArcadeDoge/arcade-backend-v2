import * as Joi from 'joi';

export const configuration = () => {
  return {
    NODE_ENV: process.env.NODE_ENV, // getEnv('NODE_ENV', 'production'),
    port: process.env.PORT, // getEnvNumber('PORT', 3000),
    prefix: process.env.PREFIX, // getEnv('PREFIX', '/'),
    signer: process.env.SIGNER, // getEnv('SIGNER'),
    privateKey: process.env.PRIVATE_KEY, // getEnv('PRIVATE_KEY'),
    marsdoge: process.env.MARSDOGE_BACKEND, // getEnv('MARSDOGE_BACKEND')
  };
};

export const validationSchema = {
  NODE_ENV: Joi.string().valid('development', 'production'),
  port: Joi.number().default(3000),
  prefix: Joi.string().default('/'),
  signer: Joi.string().required,
  privateKey: Joi.string().required,
  marsdoge: Joi.string().default('http://localhost:5000'),
};
