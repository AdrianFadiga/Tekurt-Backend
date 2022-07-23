"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    log: ['error', 'info', 'query', 'warn'],
});
exports.prisma = prisma;
//# sourceMappingURL=prismaClient.js.map