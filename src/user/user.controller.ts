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
import { GetUser } from 'src/login/decorator/get-user.decorator';
import { JwtGuard } from 'src/login/guard';
import { UserDto } from './dtos/userDto.dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Get('/:id')
  readOne(@Param('id') id: string) {
    return this.userService.readOne(id);
  }

  @Get()
  read() {
    return this.userService.read();
  }

  @Put('/:id')
  async update(
    @GetUser() user: User,
    @Body() dto: UserDto,
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
