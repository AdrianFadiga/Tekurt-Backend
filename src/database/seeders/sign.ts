import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const signs = ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes', 'Nenhum', 'Prefiro não informar'];

  for (const sign of signs) {
    await prisma.sign.create({
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
    await prisma.$disconnect();
  });