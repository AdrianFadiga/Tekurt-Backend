"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const login_model_1 = require("./login.model");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let LoginService = class LoginService {
    constructor(LoginModel, jwt, config) {
        this.LoginModel = LoginModel;
        this.jwt = jwt;
        this.config = config;
        this.userNotFoundMessage = 'Incorrect user or password';
    }
    validateUserExists(user) {
        if (!user)
            throw new common_1.UnauthorizedException(this.userNotFoundMessage);
    }
    async validatePass(password, passHash) {
        const isValidPassword = await bcrypt.compare(password, passHash);
        if (!isValidPassword)
            throw new common_1.UnauthorizedException(this.userNotFoundMessage);
    }
    async validateUser(user, password) {
        this.validateUserExists(user);
        await this.validatePass(password, user.password);
    }
    async signIn(user, password) {
        const userData = await this.LoginModel.signIn(user);
        await this.validateUser(userData, password);
        const { email, id, username } = userData;
        const token = await this.signToken({ email, id, username });
        return token;
    }
    async signToken({ email, id, username }) {
        const payload = {
            email,
            id,
            username
        };
        const secret = this.config.get('JWT_SECRET');
        return this.jwt.signAsync({ data: payload }, { expiresIn: '7d', secret: secret });
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [login_model_1.LoginModel,
        jwt_1.JwtService,
        config_1.ConfigService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map