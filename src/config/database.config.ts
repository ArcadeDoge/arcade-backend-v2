import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';
import { getEnv, getEnvBoolean, getEnvNumber } from './utils';

export const configuration = registerAs('database', () => {
  const host = getEnv('DB_HOST', 'localhost');
  const port = getEnvNumber('DB_PORT', 3306);
  const username = getEnv('DB_USERNAME');
  const password = getEnv('DB_PASSWORD');
  const database = getEnv('DB_DATABASE');
  const logging = getEnvBoolean('DB_LOGGING');
  
  return {
    host,
    port,
    username,
    password,
    database,
    logging
  }
});

export const validationSchema = {
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(3306),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
  DB_LOGGING: Joi.boolean().default(true)
};