"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
class ErrorHandler {
    static generic(err, req, res, _next) {
        if (err.statusCode)
            return res.status(err.statusCode).json({ message: err.message });
        return res.status(500).json({ message: err.message });
    }
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=errorHandler.js.map