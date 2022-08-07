"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginRepository {
    model;
    constructor(model) {
        this.model = model;
    }
    async getByEmailOrUsername(user) {
        const userData = await this.model.getByEmailOrUsername(user);
        return userData;
    }
}
exports.default = LoginRepository;
//# sourceMappingURL=login.repository.js.map