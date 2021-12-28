import * as Joi from 'joi';

export const validationSchema = {
  NODE_ENV: Joi.string().valid('development', 'production'),
}
