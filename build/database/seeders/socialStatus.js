"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const socialStatus = ['Solteiro(a)', 'Namorando', 'Noivo(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'Enrolado(a)'];
    for (const status of socialStatus) {
        await prisma.socialStatus.create({
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
    await prisma.$disconnect();
});
//# sourceMappingURL=socialStatus.js.map