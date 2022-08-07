import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          // Passar para dotenv
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }

  cleanDb() {
    return this.$transaction([
      this.drinking.deleteMany(),
      this.sign.deleteMany(),
      this.socialStatus.deleteMany(),
      this.user.deleteMany(),
      this.post.deleteMany(),
    ]);
  }
}
