import { prisma } from '../prismaClient';

async function main() {
  const posts = [
    {
      content: 'doguinho com frio',
      authorId: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
      mediaUrl:
        'https://www.petlove.com.br/dicas/wp-content/uploads/2021/05/cachorro-com-frio-petlove.jpg',
    },
    {
      content: 'doguinho feliz',
      authorId: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
      mediaUrl: 'https://www.rbsdirect.com.br/imagesrc/25393328.jpg?w=700',
    },
  ];

  // Este setTimeout existe pois se não as seeders de post são criadas antes da user
  // e acaba quebrando o banco de dados.
  setTimeout(async () => {
    for (const post of posts) {
      await prisma.post.create({
        data: { ...post },
      });
    }
  }, 1000);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
