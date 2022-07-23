"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_controller_1 = __importDefault(require("../../../api/controllers/login.controller"));
const login_model_1 = __importDefault(require("../../../api/models/login.model"));
const login_repository_1 = __importDefault(require("../../../api/repositories/login.repository"));
const login_service_1 = __importDefault(require("../../../api/services/login.service"));
const tokenUtils_1 = require("../../../utils/tokenUtils");
const user_1 = require("../mocks/user");
const express_mock_1 = __importDefault(require("../mocks/express.mock"));
describe('Testa a "controller" de login', () => {
    it('Verifica se a controller existe', () => {
        expect(typeof login_controller_1.default).toBe('function');
    });
    const model = new login_model_1.default();
    const repository = new login_repository_1.default(model);
    const service = new login_service_1.default(repository);
    const controller = new login_controller_1.default(service);
    it('Verifica se o método sigIn existe', () => {
        expect(typeof controller.sigIn).toBe('function');
    });
    describe('Em casos de sucesso', () => {
        const { email, id, username } = user_1.userLogin;
        const token = tokenUtils_1.JWT.encryptToken({ email, id, username });
        beforeEach(() => {
            service.sigIn = jest.fn().mockResolvedValue(token);
        });
        afterEach(() => {
            service.sigIn.mockReset();
        });
        const req = express_mock_1.default.mockRequest();
        const res = express_mock_1.default.mockResponse();
        it('Testa se responde com status e token correto', async () => {
            await controller.sigIn(req, res);
            expect(res.status).toBeCalledWith(200);
            expect(res.json).toBeCalledWith({ token });
        });
    });
});
//# sourceMappingURL=login.controller.spec.js.map