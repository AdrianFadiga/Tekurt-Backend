import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  constructor(private service: LoginService) {}

  public async getByEmailOrUsername(req: Request, res: Response) {
    const { user } = req.body;

    const userData = await this.service.getByEmailOrUsername(user);

    return res.status(200).json(userData);
  }
}