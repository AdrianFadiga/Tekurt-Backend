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
import { passwordDto, UserDto } from './dtos';
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

  @Put('/:id')
  async update(
    @GetUser() { id }: User,
    @Body() dto: UserDto,
    @Param('id') paramId: string,
  ) {
    return this.userService.update(id, paramId, dto);
  }

  @Patch('/:id')
  async updatePassword(
    @GetUser() { id }: User,
    @Body() { password }: passwordDto,
    @Param('id') paramId: string,
  ) {
    return this.userService.updatePassword(id, password, paramId);
  }

  @Delete('/:id')
  async delete(@GetUser() user: User, @Param('id') paramId: string) {
    const { id } = user;
    return this.userService.delete(id, paramId);
  }
}
