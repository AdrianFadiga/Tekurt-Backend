import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  constructor(private service: LoginService) {}

  public async sigIn(req: Request, res: Response) {
    const { user, password } = req.body;

    const token = await this.service.sigIn(user, password);

    return res.status(200).json({ token });
  }
}