import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class OptionsModel {
  constructor(private databaseService: DatabaseService) {}
  async getSocialStatus() {
    return this.databaseService.socialStatus.findMany();
  }
  async getSigns() {
    return this.databaseService.sign.findMany();
  }
  async getDrinking() {
    return this.databaseService.drinking.findMany();
  }
}
