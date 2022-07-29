"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildLayers = void 0;
const login_controller_1 = require("../controllers/login.controller");
const login_service_1 = require("../services/login.service");
const login_repository_1 = require("../repositories/login.repository");
const login_model_1 = require("../models/login.model");
class BuildLayers {
    static factoryLogin() {
        const model = new login_model_1.default();
        const repository = new login_repository_1.default(model);
        const service = new login_service_1.default(repository);
        const controller = new login_controller_1.default(service);
        return controller;
    }
}
exports.BuildLayers = BuildLayers;
//# sourceMappingURL=loginLayers.js.map