"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
require("dotenv/config");
const PORT = process.env.PORT || 3000;
console.log(process.env.DATABASE_URL);
console.log(process.env.PORT);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    await app.listen(PORT, () => console.log(`Online na porta: ${PORT}`));
}
bootstrap();
//# sourceMappingURL=main.js.map