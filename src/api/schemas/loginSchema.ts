import Joi from 'joi';

export const loginSchema = Joi.object({
  user: Joi.string().required().empty(),
  password: Joi.string().required().empty()
});
