import { DatabaseService } from 'src/database/database.service';
export declare class LoginModel {
    private prisma;
    constructor(prisma: DatabaseService);
    signIn(user: string): Promise<{
        id: string;
        username: string;
        email: string;
        password: string;
    }>;
}
