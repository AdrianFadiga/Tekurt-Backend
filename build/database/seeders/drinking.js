"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const options = ['Sim', 'Não', 'As vezes', 'Socialmente', 'Com os amigos'];
    for (const option of options) {
        await prisma.drinking.create({
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
    await prisma.$disconnect();
});
//# sourceMappingURL=drinking.js.map