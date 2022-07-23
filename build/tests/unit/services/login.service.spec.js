"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const tokenUtils_1 = require("./../../../utils/tokenUtils");
const login_service_1 = __importDefault(require("../../../api/services/login.service"));
const user_1 = require("../mocks/user");
const login_repository_1 = __importDefault(require("../../../api/repositories/login.repository"));
const login_model_1 = __importDefault(require("../../../api/models/login.model"));
describe('Testa a "service" de login', () => {
    it('Verifica se a "service" existe', () => {
        expect(typeof login_service_1.default).toBe('function');
    });
    const model = new login_model_1.default();
    const repository = new login_repository_1.default(model);
    const service = new login_service_1.default(repository);
    it('Verifica se o método sigIn existe', () => {
        expect(typeof service.sigIn).toBe('function');
    });
    describe('Caso o usuário exista e a senha esteja correta', () => {
        beforeEach(() => {
            repository.getByEmailOrUsername = jest.fn().mockResolvedValue(user_1.userLogin);
            bcrypt_1.default.compare = jest.fn().mockResolvedValue(true);
        });
        afterEach(() => {
            repository.getByEmailOrUsername.mockReset();
            bcrypt_1.default.compare.mockReset();
        });
        const { email, id, username } = user_1.userLogin;
        const token = tokenUtils_1.JWT.encryptToken({ email, id, username });
        it('Testa se retorna o token corretamente', async () => {
            const response = await service.sigIn(user_1.userLogin.username, user_1.userLogin.password);
            expect(response).toBeDefined();
            const decodedToken = tokenUtils_1.JWT.decryptToken(response);
            expect(decodedToken).toEqual({ email, id, username });
        });
    });
    describe('Caso o usuário nao exista', () => {
        beforeEach(() => {
            repository.getByEmailOrUsername = jest.fn().mockResolvedValue(null);
        });
        afterEach(() => {
            repository.getByEmailOrUsername.mockReset();
        });
        it('Testa se retorna um erro com o status "404" e a mensagem "Incorret user or password"', async () => {
            expect.assertions(2);
            try {
                await service.sigIn(user_1.userLogin.username, user_1.userLogin.password);
            }
            catch (error) {
                expect(error.message).toBe('Incorret user or password');
                expect(error.statusCode).toBe(404);
            }
        });
    });
    describe('Caso o usuário exista mas a senha esteja incorreta', () => {
        beforeEach(() => {
            repository.getByEmailOrUsername = jest.fn().mockResolvedValue(null);
            bcrypt_1.default.compare = jest.fn().mockResolvedValue(false);
        });
        afterEach(() => {
            repository.getByEmailOrUsername.mockReset();
            bcrypt_1.default.compare.mockReset();
        });
        it('Testa se retorna um erro com o status "404" e a mensagem "Incorret user or password', async () => {
            expect.assertions(2);
            try {
                await service.sigIn(user_1.userLogin.username, user_1.userLogin.password);
            }
            catch (error) {
                expect(error.message).toBe('Incorret user or password');
                expect(error.statusCode).toBe(404);
            }
        });
    });
});
//# sourceMappingURL=login.service.spec.js.map