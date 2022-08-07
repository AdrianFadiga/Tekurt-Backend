"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateError_1 = require("./../../utils/generateError");
const tokenUtils_1 = require("../../utils/tokenUtils");
const bcrypt_1 = __importDefault(require("bcrypt"));
class LoginService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async sigIn(user, password) {
        const userData = await this.repository.getByEmailOrUsername(user);
        if (!userData)
            throw new generateError_1.GenerateError(404, 'Incorret user or password');
        const isValidPassword = await bcrypt_1.default.compare(password, userData.password);
        if (!isValidPassword)
            throw new generateError_1.GenerateError(404, 'Incorret user or password');
        const { email, id, username } = userData;
        const token = tokenUtils_1.JWT.encryptToken({ email, id, username });
        return token;
    }
}
exports.default = LoginService;
//# sourceMappingURL=login.service.js.map