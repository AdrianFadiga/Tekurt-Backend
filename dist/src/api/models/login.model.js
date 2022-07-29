"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = require("../../../prisma/prismaClient");
class LoginModel {
    async getByEmailOrUsername(user) {
        const userData = prismaClient_1.prisma.user.findFirst({
            where: {
                OR: [{ email: user }, { username: user }]
            },
            select: {
                username: true,
                id: true,
                email: true,
                password: true
            }
        });
        return userData;
    }
}
exports.default = LoginModel;
//# sourceMappingURL=login.model.js.map