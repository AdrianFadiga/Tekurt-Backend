import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { GetUser } from '../login/decorator';
import { JwtGuard } from '../login/guard';
import { DeleteUserDto, passwordDto, UpdateUserDto } from './dtos';

import { UserService } from './user.service';

@UseGuards(JwtGuard)
@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/:username')
  readOne(@Param('username') username: string) {
    return this.userService.readOne(username);
  }

  @Get()
  read() {
    return this.userService.read();
  }

  @Put('/me')
  async update(@GetUser() { id, username }: User, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, username, dto);
  }

  @Patch('/me')
  async updatePassword(
    @GetUser() { id }: User,
    @Body() { password }: passwordDto,
  ) {
    return this.userService.updatePassword(id, password);
  }

  @Delete('/me')
  async delete(@GetUser() { id }: User, @Body() { password }: DeleteUserDto) {
    return this.userService.delete(id, password);
  }
}
