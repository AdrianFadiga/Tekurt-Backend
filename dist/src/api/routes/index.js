"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = require("./login");
const routes = (0, express_1.Router)();
routes.use('/login', login_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map