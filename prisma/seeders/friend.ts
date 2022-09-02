import { prisma } from '../prismaClient';
import { Friend } from '@prisma/client';

async function main() {
  const friends: Friend[] = [
    {
      userId: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
      friendId: '124818c1-41f7-4a5a-ba8d-d9457b24e367',
      status: 'accepted',
    },
    {
      userId: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
      friendId: 'f636fa8c-0891-4bdd-bf39-1c9bd7b9e7ee',
      status: 'pending',
    },
    {
      userId: '124818c1-41f7-4a5a-ba8d-d9457b24e367',
      friendId: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
      status: 'accepted',
    },
  ];

  setTimeout(async () => {
    for (const friend of friends) {
      await prisma.friend.create({
        data: friend,
      });
    }
  }, 2000);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
