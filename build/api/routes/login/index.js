"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginLayers_1 = require("../../builder/loginLayers");
const loginValidate_1 = require("../../middlewares/loginValidate");
const routes = (0, express_1.Router)();
const controller = loginLayers_1.BuildLayers.factoryLogin();
routes.post('/', loginValidate_1.validateLogin, controller.sigIn.bind(controller));
exports.default = routes;
//# sourceMappingURL=index.js.map