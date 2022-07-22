import { prisma } from '../../database/prismaClient';

export default class LoginModel {
  public async getByEmailOrUsername(user: string) {
    const userData = prisma.user.findFirst({
      where: {
        OR: [{ email: user }, { username: user }]
      },
      select: {
        username: true,
        id: true,
        email: true,
        password: true
      }
    });    

    return userData;
  }
}