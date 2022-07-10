import { prisma } from '../../database/prismaClient';

export default class UserModel {
  public async getByEmail(user: string) {
    const userData = prisma.user.findFirst({ where: {
      OR: [{ email: user }, { username: user }]
    } });

    return userData;
  }
}