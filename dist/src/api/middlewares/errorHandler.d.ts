import { NextFunction, Request, Response } from 'express';
import { GenerateError } from '../../utils/generateError';
export declare class ErrorHandler {
    static generic(err: GenerateError, req: Request, res: Response, _next: NextFunction): Response<any, Record<string, any>>;
}
