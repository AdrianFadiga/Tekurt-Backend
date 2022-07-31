import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class LoginModel {
  constructor(private prisma: DatabaseService) {}
  async signIn(user: string) {
    const userData = await this.prisma.user.findFirst({
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
