import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoginModule } from './login/login.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [LoginModule, 
    DatabaseModule, 
    ConfigModule.forRoot({
      isGlobal: true,
    })],
})
export class AppModule {}
