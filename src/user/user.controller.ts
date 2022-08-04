import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/login/decorator/get-user.decorator';
import { JwtGuard } from 'src/login/guard';
import { UserDto } from './dtos/userDto.dto';
import { UserService } from './user.service';


@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor (private userService: UserService) {}
  
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Get('/:id')
  async readOne(@Param('id') id: string) {
    const user = await this.userService.readOne(id);
    return user;
  }

  @Get()
  async read() {
    const users = await this.userService.read();
    return users;
  }

  // @Post()
  // async create(@Body() dto: UserDto) {
  //   await this.userService.create(dto);
  //   return {message: 'Created'};
  // }

  // Verificar como fazer para não precisar atualizar ou enviar o password 
  // no req.body na hora do put
  // para aproveitar o UserDto
  // Lógica de Front ou Back?
  @Put('/:id')
  async update(@Body() dto: UserDto, @GetUser() user: User, @Param('id') paramId: string) {
    const { id } = user;
    await this.userService.validateUser(id, paramId);
    await this.userService.update(id, dto);
    return { message: 'Updated' };
  } 

  @Delete('/:id')
  async delete(@GetUser() user: User, @Param('id') paramId: string) {
    const { id } = user;
    await this.userService.validateUser(user.id, paramId);
    await this.userService.delete(id);
    return { message: 'Deleted' };
  }
}