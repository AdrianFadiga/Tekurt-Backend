import { NextFunction, Request, Response } from 'express';
import { GenerateError } from '../../utils/generateError';

export class ErrorHandler {
  static generic(err: GenerateError, req: Request, res: Response, _next: NextFunction) {
    if (err.statusCode) return res.status(err.statusCode).json({ message: err.message });

    return res.status(500).json({ message: err.message });
  }
}