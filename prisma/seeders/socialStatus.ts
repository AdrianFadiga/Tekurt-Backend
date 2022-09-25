import { prisma } from '../prismaClient';

async function main() {
  const options = [
    'Não informado',
    'Solteiro(a)',
    'Namorando',
    'Noivo(a)',
    'Casado(a)',
    'Divorciado(a)',
    'Viúvo(a)',
    'Enrolado(a)',
  ];

  for (const option of options) {
    await prisma.socialStatus.create({
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
