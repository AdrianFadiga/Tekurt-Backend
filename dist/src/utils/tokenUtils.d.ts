import { IPayloadLogin } from './../api/interfaces/IPayloadLogin';
import 'dotenv/config';
export declare class JWT {
    private static jwtConfig;
    private static secret;
    static encryptToken(payload: IPayloadLogin): string;
    static decryptToken(token: string): any;
}
