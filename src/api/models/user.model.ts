import { prisma } from '../../database/prismaClient';

export default class UserModel {
  public async getByEmailOrUsername(user: string) {
    const userData = prisma.user.findFirst({ where: {
      OR: [{ email: user }, { username: user }]
    } });

    return userData;
  }
}