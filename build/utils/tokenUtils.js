"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT = void 0;
const jwt = __importStar(require("jsonwebtoken"));
require("dotenv/config");
class JWT {
    static jwtConfig = {
        algorithm: 'HS256',
        expiresIn: '7d'
    };
    static secret = process.env.JWT_SECRET;
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
//# sourceMappingURL=tokenUtils.js.map