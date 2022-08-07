import { prisma } from '../prismaClient';

async function main() {
  await prisma.user.create({
    data: {
      id: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
      firstName: 'nome',
      lastName: 'sobrenome',
      username: 'usuario',
      email: 'teste@teste.com',
      password: '$2b$08$YqzWMbcBWAJwwm/djC2njelPHJxzDtb9d17rUfQFUxoKVoOmrTMkC',
      // teste
      imageUrl: 'url_imagem',
      biography: 'biografia',
    },
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
