"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = require("../prismaClient");
async function main() {
    const socialStatus = ['Solteiro(a)', 'Namorando', 'Noivo(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'Enrolado(a)'];
    for (const status of socialStatus) {
        await prismaClient_1.prisma.socialStatus.create({
            data: { status }
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
//# sourceMappingURL=socialStatus.js.map