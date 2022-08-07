import { DatabaseService } from 'src/database/database.service';
import { UserDto } from 'src/user/dtos';
export declare class LoginModel {
    private database;
    constructor(database: DatabaseService);
    signIn(user: string): Promise<{
        id: string;
        username: string;
        email: string;
        password: string;
    }>;
    findByEmail(email: string): Promise<import(".prisma/client").User>;
    create(dto: UserDto): Promise<import(".prisma/client").User>;
}
