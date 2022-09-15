import { Controller, Get } from '@nestjs/common';
import { OptionsService } from './options.service';

@Controller('options')
export class OptionsController {
  constructor(private optionsService: OptionsService) {}

  @Get()
  async getAll() {
    return this.optionsService.getAll();
  }

  @Get('socialstatus')
  async getSocialStatus() {
    return this.optionsService.getSocialStatus();
  }

  @Get('signs')
  async getSigns() {
    return this.optionsService.getSigns();
  }

  @Get('drinking')
  async getDrinking() {
    return this.optionsService.getDrinking();
  }
}
