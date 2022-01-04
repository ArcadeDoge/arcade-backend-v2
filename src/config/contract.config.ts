import * as Joi from 'joi';

export const configuration = () => {
  return {
    chainId: Number(process.env.CHAIN_ID),
    swapContract: process.env.SWAP_CONTRACT,
  };
};

export const validationSchema = {
  chainid: Joi.number().default(56).required,
  swapContract: Joi.string().required,
};
