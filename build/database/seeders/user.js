"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.user.create({
        data: {
            firstName: 'nome',
            lastName: 'sobrenome',
            username: 'usuario',
            email: 'teste@teste.com',
            password: 'teste',
            imageUrl: 'url_imagem',
            socialStatusId: '7f08afd5-4b4c-48bd-856f-935c684cc56a',
            children: false,
            smokes: false,
            drinkingId: '56b726bb-72a3-4865-950d-09f1dd5a5ccb',
            signId: 'd1e4d5b3-a0f3-4e17-8703-d10fb274e582',
            biography: 'biografia',
        }
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=user.js.map