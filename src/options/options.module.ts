import { Module } from '@nestjs/common';
import { OptionsController } from './options.controller';
import { OptionsModel } from './options.model';
import { OptionsService } from './options.service';

@Module({
  controllers: [OptionsController],
  providers: [OptionsService, OptionsModel],
})
export class OptionsModule {}
