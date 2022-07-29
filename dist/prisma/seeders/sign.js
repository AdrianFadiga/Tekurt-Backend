"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = require("../prismaClient");
async function main() {
    const signs = ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes', 'Nenhum', 'Prefiro não informar'];
    for (const sign of signs) {
        await prismaClient_1.prisma.sign.create({
            data: { sign }
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
//# sourceMappingURL=sign.js.map