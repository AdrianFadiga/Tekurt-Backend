import { Injectable } from '@nestjs/common';
import { OptionsModel } from './options.model';

@Injectable()
export class OptionsService {
  constructor(private optionsModel: OptionsModel) {}
  async getAll() {
    return {
      socialStatus: await this.getSocialStatus(),
      signs: await this.getSigns(),
      drinking: await this.getDrinking(),
    };
  }
  async getSocialStatus() {
    return this.optionsModel.getSocialStatus();
  }
  async getSigns() {
    return this.optionsModel.getSigns();
  }
  async getDrinking() {
    return this.optionsModel.getDrinking();
  }
}
