import { UserDto } from './dtos';
import { UserModel } from './user.model';
export declare class UserService {
    private userModel;
    constructor(userModel: UserModel);
    read(): Promise<import(".prisma/client").User[]>;
    readOne(id: string): Promise<import(".prisma/client").User>;
    validateUser(userId: string, paramId: string): Promise<void>;
    update(id: string, dto: UserDto): Promise<void>;
    delete(id: string): Promise<void>;
}
