"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
require("dotenv/config");
const app = (0, supertest_1.default)('http://localhost:3030');
describe('Em caso de sucesso', () => {
    it('Testa se o endpoint /login retorna um token', async () => {
        const response = await app.post('/login').send({
            user: 'usuario',
            password: 'teste'
        });
        console.log(response.body);
        expect(response.status).toBe(200);
    });
});
//# sourceMappingURL=login.spec.js.map