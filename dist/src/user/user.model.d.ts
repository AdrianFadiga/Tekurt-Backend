import { DatabaseService } from 'src/database/database.service';
import { UserDto } from './dtos';
export declare class UserModel {
    private database;
    constructor(database: DatabaseService);
    read(): Promise<import(".prisma/client").User[]>;
    readOne(id: string): Promise<import(".prisma/client").User>;
    update(id: string, dto: UserDto): Promise<void>;
    delete(id: string): Promise<void>;
}
