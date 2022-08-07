"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const errorHandler_1 = require("./middlewares/errorHandler");
class App {
    app;
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.app.get('/', (req, res) => res.send('API tekurt online'));
    }
    config() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use(routes_1.default);
        this.app.use(errorHandler_1.ErrorHandler.generic);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Online na porta: ${PORT}`));
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map