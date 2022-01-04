import * as Joi from 'joi';

export const configuration = () => {
  return {
    NODE_ENV: process.env.NODE_ENV, // getEnv('NODE_ENV', 'production'),
    port: process.env.PORT, // getEnvNumber('PORT', 3000),
    prefix: process.env.PREFIX, // getEnv('PREFIX', '/'),
    chainId: Number(process.env.CHAIN_ID), // getEnvNumber('CHAIN_ID', 56),
    rpcUrl: process.env.RPC_URL,
    signer: process.env.SIGNER, // getEnv('SIGNER'),
    privateKey: process.env.PRIVATE_KEY, // getEnv('PRIVATE_KEY'),
    swapContract: process.env.SWAP_CONTRACT, // getEnv('SWAP_CONTRACT'),
    syncDelay: Number(process.env.SYNC_DELAY),
    marsdoge: process.env.MARSDOGE_BACKEND, // getEnv('MARSDOGE_BACKEND')
  };
};

export const validationSchema = {
  NODE_ENV: Joi.string().valid('development', 'production'),
  port: Joi.number().default(4000),
  prefix: Joi.string().default('/'),
  chainid: Joi.number().default(56).required,
  rpcUrl: Joi.string().required,
  signer: Joi.string().required,
  privateKey: Joi.string().required,
  swapContract: Joi.string().required,
  syncDelay: Joi.number().default(3000),
  marsdoge: Joi.string().default('http://localhost:5000'),
};
