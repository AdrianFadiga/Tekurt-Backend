import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          // Passar para dotenv
          url: 'mysql://root:password@localhost:3306/tekurt_test?schema=public',
        },
      },
    });
  }
}