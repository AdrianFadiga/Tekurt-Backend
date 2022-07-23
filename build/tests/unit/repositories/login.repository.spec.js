"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_repository_1 = __importDefault(require("../../../api/repositories/login.repository"));
const user_1 = require("../mocks/user");
const login_model_1 = __importDefault(require("../../../api/models/login.model"));
describe('Testa a "repository" de Login', () => {
    it('Verifica se a "repository" existe', () => {
        expect(typeof login_repository_1.default).toBe('function');
    });
    const model = new login_model_1.default();
    const repository = new login_repository_1.default(model);
    it('Verifica se o método getByEmailOrUsername existe', () => {
        expect(typeof repository.getByEmailOrUsername).toBe('function');
    });
    describe('Caso o usuário exista', () => {
        beforeEach(() => {
            model.getByEmailOrUsername = jest.fn().mockResolvedValue(user_1.userLogin);
        });
        afterEach(() => {
            model.getByEmailOrUsername.mockReset();
        });
        it('Testa se retorna as informações especificas', async () => {
            const response = await repository.getByEmailOrUsername(user_1.userLogin.username);
            expect(response).toStrictEqual(user_1.userLogin);
        });
    });
    describe('Caso o usuário não exista', () => {
        beforeEach(() => {
            model.getByEmailOrUsername = jest.fn().mockResolvedValue(null);
        });
        afterEach(() => {
            model.getByEmailOrUsername.mockReset();
        });
        it('Testa se retorna null', async () => {
            const response = await repository.getByEmailOrUsername(user_1.userLogin.username);
            expect(response).toBe(null);
        });
    });
});
//# sourceMappingURL=login.repository.spec.js.map