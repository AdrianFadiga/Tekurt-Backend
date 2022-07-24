import { Request, NextFunction, Response } from 'express';
import { GenerateError } from '../../utils/generateError';
import { loginSchema } from '../schemas/loginSchema';

export const validateLogin = (req: Request, _res: Response, next: NextFunction) => {
  const { user, password } = req.body;

  const { error } = loginSchema.validate({ user, password });

  if (error) return next(new GenerateError(400, error.message));

  return next();
};
