"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginController {
    constructor(service) {
        this.service = service;
    }
    async sigIn(req, res) {
        const { user, password } = req.body;
        const token = await this.service.sigIn(user, password);
        return res.status(200).json({ token });
    }
}
exports.default = LoginController;
//# sourceMappingURL=login.controller.js.map