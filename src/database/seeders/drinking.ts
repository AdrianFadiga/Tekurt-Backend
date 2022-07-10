import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

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