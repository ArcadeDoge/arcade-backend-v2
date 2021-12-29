import * as Joi from 'joi';
import { getEnv, getEnvNumber } from './utils';

export const configuration = () => {
  return {
    NODE_ENV: process.env.NODE_ENV, // getEnv('NODE_ENV', 'production'),
    port: process.env.PORT, // getEnvNumber('PORT', 3000),
    prefix: process.env.PREFIX, // getEnv('PREFIX', '/'),
    chainId: Number(process.env.CHAIN_ID), // getEnvNumber('CHAIN_ID', 56),
    signer: process.env.SIGNER, // getEnv('SIGNER'),
    privateKey: process.env.PRIVATE_KEY, // getEnv('PRIVATE_KEY'),
    swapContract: process.env.SWAP_CONTRACT, // getEnv('SWAP_CONTRACT'),
    marsdoge: process.env.MARSDOGE_BACKEND // getEnv('MARSDOGE_BACKEND')
  }
}

export const validationSchema = {
  NODE_ENV: Joi.string().valid('development', 'production'),
  port: Joi.number().default(3000),
  prefix: Joi.string().default('/'),
  chainid: Joi.number().default(56).required,
  signer: Joi.string().required,
  privateKey: Joi.string().required,
  swapContract: Joi.string().required,
  marsdoge: Joi.string().default('http://localhost:5000')
}
