"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = require("../prismaClient");
async function main() {
    await prismaClient_1.prisma.user.create({
        data: {
            firstName: 'nome',
            lastName: 'sobrenome',
            username: 'usuario',
            email: 'teste@teste.com',
            password: '$2b$08$YqzWMbcBWAJwwm/djC2njelPHJxzDtb9d17rUfQFUxoKVoOmrTMkC',
            imageUrl: 'url_imagem',
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
    await prismaClient_1.prisma.$disconnect();
});
//# sourceMappingURL=user.js.map