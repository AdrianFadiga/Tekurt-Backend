"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_model_1 = __importDefault(require("../../../api/models/login.model"));
const user_1 = require("../mocks/user");
const prismaClient_1 = require("../../../database/prismaClient");
describe('Testa a "model" de Login', () => {
    it('Verifica se a model existe', () => {
        expect(typeof login_model_1.default).toBe('function');
    });
    it('Verifica se o método getByEmailOrUsername existe', () => {
        const model = new login_model_1.default();
        expect(typeof model.getByEmailOrUsername).toBe('function');
    });
    describe('Em caso de sucesso', () => {
        beforeEach(() => {
            prismaClient_1.prisma.user.findFirst = jest.fn().mockResolvedValue(user_1.userLogin);
        });
        afterEach(() => {
            prismaClient_1.prisma.user.findFirst.mockReset();
        });
        it('Testa se retorna o usuario com os dados corretos ao passar o username', async () => {
            const model = new login_model_1.default();
            const response = await model.getByEmailOrUsername(user_1.userLogin.username);
            expect(response).toEqual(user_1.userLogin);
        });
    });
});
//# sourceMappingURL=login.model.spec.js.map