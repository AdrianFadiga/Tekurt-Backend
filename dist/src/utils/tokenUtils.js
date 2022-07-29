"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT = void 0;
const jwt = require("jsonwebtoken");
require("dotenv/config");
class JWT {
    static encryptToken(payload) {
        const token = jwt.sign({ data: payload }, JWT.secret, JWT.jwtConfig);
        return token;
    }
    static decryptToken(token) {
        const { data } = jwt.verify(token, JWT.secret);
        return data;
    }
}
exports.JWT = JWT;
JWT.jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '7d'
};
JWT.secret = process.env.JWT_SECRET;
//# sourceMappingURL=tokenUtils.js.map