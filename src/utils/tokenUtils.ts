import { IPayloadLogin } from './../api/interfaces/IPayloadLogin';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

export class JWT {
  private static jwtConfig: jwt.SignOptions = { 
    algorithm: 'HS256',
    expiresIn: '7d'
  };

  private static secret = process.env.JWT_SECRET as string;

  static encryptToken(payload: IPayloadLogin) {
    const token = jwt.sign({ data: payload }, JWT.secret, JWT.jwtConfig);

    return token;
  }

  static decryptToken(token: string) {
    const { data } = jwt.verify(token, JWT.secret) as jwt.JwtPayload; 

    return data;
  } 
}