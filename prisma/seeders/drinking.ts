import { prisma } from '../prismaClient';

async function main() {
  const options = [
    'Não informado',
    'Sim',
    'Não',
    'As vezes',
    'Socialmente',
    'Com os amigos',
  ];

  for (const option of options) {
    await prisma.drinking.create({
      data: { option },
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
