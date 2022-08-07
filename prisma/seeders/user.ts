import { prisma } from '../prismaClient';

async function main() {
  await prisma.user.create({
    data: {
      firstName: 'nome',
      lastName: 'sobrenome',
      username: 'usuario',
      email: 'teste@teste.com',
      hash: '$2b$08$YqzWMbcBWAJwwm/djC2njelPHJxzDtb9d17rUfQFUxoKVoOmrTMkC',
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
