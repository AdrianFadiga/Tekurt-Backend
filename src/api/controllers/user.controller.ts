import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  constructor(private service: UserService) {}

  public async getByEmailOrUsername(req: Request, res: Response) {
    const { user } = req.body;

    const userData = await this.service.getByEmailOrUsername(user);

    return res.status(200).json(userData);
  }
}