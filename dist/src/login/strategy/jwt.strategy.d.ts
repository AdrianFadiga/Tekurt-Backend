import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { DatabaseService } from 'src/database/database.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private config;
    private database;
    constructor(config: ConfigService, database: DatabaseService);
    validate(payload: any): Promise<import(".prisma/client").User>;
}
export {};
