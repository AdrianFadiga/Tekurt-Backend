"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    mockRequest: () => {
        const req = {};
        req.body = jest.fn().mockReturnValue(req);
        req.params = jest.fn().mockReturnValue(req);
        req.headers = jest.fn().mockReturnValue(req);
        return req;
    },
    mockResponse: () => {
        const res = {};
        res.send = jest.fn().mockReturnValue(res);
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
    }
};
//# sourceMappingURL=express.mock.js.map