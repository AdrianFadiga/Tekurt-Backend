import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../login/decorator';
import { JwtGuard } from '../login/guard';
import { UserDto } from './dtos/userDto.dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Get('/:username')
  readOne(@Param('username') username: string) {
    return this.userService.readOne(username);
  }

  @Get()
  read() {
    return this.userService.read();
  }

  // fazer uma rota só para att a senha
  @Put('/:id')
  async update(
    @GetUser() user: User,
    @Body() dto: Omit<UserDto, 'password'>,
    @Param('id') paramId: string,
  ) {
    const { id } = user;
    return this.userService.update(id, paramId, dto);
  }

  @Delete('/:id')
  async delete(@GetUser() user: User, @Param('id') paramId: string) {
    const { id } = user;
    return this.userService.delete(id, paramId);
  }
}
