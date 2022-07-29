import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [LoginModule, DatabaseModule],
})
export class AppModule {}
