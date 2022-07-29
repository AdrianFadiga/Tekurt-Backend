"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = void 0;
const joi_1 = require("joi");
exports.loginSchema = joi_1.default.object({
    user: joi_1.default.string().required().empty(),
    password: joi_1.default.string().required().empty()
});
//# sourceMappingURL=loginSchema.js.map