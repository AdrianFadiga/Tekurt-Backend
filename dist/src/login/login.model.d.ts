import { DatabaseService } from 'src/database/database.service';
export declare class LoginModel {
    private prisma;
    constructor(prisma: DatabaseService);
    signIn(user: string): Promise<{
        username: string;
        email: string;
        id: string;
        password: string;
    }>;
}
