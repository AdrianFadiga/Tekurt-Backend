"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = require("../prismaClient");
async function main() {
    const options = ['Sim', 'Não', 'As vezes', 'Socialmente', 'Com os amigos'];
    for (const option of options) {
        await prismaClient_1.prisma.drinking.create({
            data: { option }
        });
    }
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prismaClient_1.prisma.$disconnect();
});
//# sourceMappingURL=drinking.js.map