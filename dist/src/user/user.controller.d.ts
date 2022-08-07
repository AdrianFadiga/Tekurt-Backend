import { User } from '@prisma/client';
import { UserDto } from './dtos/userDto.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getMe(user: User): User;
    readOne(id: string): Promise<User>;
    read(): Promise<User[]>;
    update(dto: UserDto, user: User, paramId: string): Promise<{
        message: string;
    }>;
    delete(user: User, paramId: string): Promise<{
        message: string;
    }>;
}
