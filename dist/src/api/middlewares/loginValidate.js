"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = void 0;
const generateError_1 = require("../../utils/generateError");
const loginSchema_1 = require("../schemas/loginSchema");
const validateLogin = (req, _res, next) => {
    const { user, password } = req.body;
    const { error } = loginSchema_1.loginSchema.validate({ user, password });
    if (error)
        return next(new generateError_1.GenerateError(400, error.message));
    return next();
};
exports.validateLogin = validateLogin;
//# sourceMappingURL=loginValidate.js.map