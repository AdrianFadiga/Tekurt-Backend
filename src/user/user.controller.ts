import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Put,
  Query,
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

  @Get('/me')
  async getMe(@GetUser() { username }: User) {
    return this.userService.readOne(username);
  }

  @Get('/:username')
  readOne(@Param('username') username: string) {
    return this.userService.readOne(username);
  }

  @Get()
  read(@Query('filter') filter: string) {
    if (filter) return this.userService.readByQuery(filter);
    return this.userService.read();
  }

  @Put('/me')
  async update(@GetUser() { id, username }: User, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, username, dto);
  }

  @Patch('/me')
  async updatePassword(
    @GetUser() { id }: User,
    @Body() { password, newPassword }: passwordDto,
  ) {
    return this.userService.updatePassword(id, password, newPassword);
  }

  @Delete('/me')
  async delete(@GetUser() { id }: User, @Body() { password }: DeleteUserDto) {
    return this.userService.delete(id, password);
  }
}
