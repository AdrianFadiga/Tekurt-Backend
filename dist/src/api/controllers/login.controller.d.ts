import { Request, Response } from 'express';
import LoginService from '../services/login.service';
export default class LoginController {
    private service;
    constructor(service: LoginService);
    sigIn(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
