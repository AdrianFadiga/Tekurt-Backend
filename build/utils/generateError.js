"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateError = void 0;
class GenerateError extends Error {
    statusCode;
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.GenerateError = GenerateError;
//# sourceMappingURL=generateError.js.map