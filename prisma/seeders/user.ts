import { prisma } from '../prismaClient';

async function main() {
  const users = [
    {
      id: '2bb6e92a-3c2b-4b7f-a822-96f5106d8c37',
      firstName: 'nome',
      lastName: 'sobrenome',
      username: 'usuario',
      email: 'teste@teste.com',
      password: '$2b$08$YqzWMbcBWAJwwm/djC2njelPHJxzDtb9d17rUfQFUxoKVoOmrTMkC',
      // teste
      imageUrl:
        'http://s2.glbimg.com/TzufY-gOH6eRenabZIhS0BJrTyM=/290x217/s2.glbimg.com/AFRccyhI2AZfH3Xx1Z2_z99q1KA=/s.glbimg.com/jo/g1/f/original/2014/09/29/orkut.jpg',
      biography: 'biografia',
      socialStatusId: 1,
      smokes: false,
      drinkingId: 1,
      signId: 1,
    },
    {
      id: '124818c1-41f7-4a5a-ba8d-d9457b24e367',
      firstName: 'Matheus',
      lastName: 'Ferreira',
      username: 'TheusFerreira',
      email: 'theusferreira@tekurt.com',
      password: '$2b$08$YqzWMbcBWAJwwm/djC2njelPHJxzDtb9d17rUfQFUxoKVoOmrTMkC',
      // teste
      imageUrl:
        'https://media-exp1.licdn.com/dms/image/C4D03AQFZ1g9QX3wLQA/profile-displayphoto-shrink_200_200/0/1636235543302?e=1667433600&v=beta&t=VWD0eC8FJXZdQzSYmHoudSz6sDyHIMI1mI-YsRggK3g',
      biography: 'biografia',
      socialStatusId: 1,
      smokes: false,
      drinkingId: 1,
      signId: 1,
    },
    {
      id: 'f636fa8c-0891-4bdd-bf39-1c9bd7b9e7ee',
      firstName: 'Adrian',
      lastName: 'Fadiga',
      username: 'AdrianFadiga',
      email: 'adrianfadiga@tekurt.com',
      password: '$2b$08$YqzWMbcBWAJwwm/djC2njelPHJxzDtb9d17rUfQFUxoKVoOmrTMkC',
      // teste
      imageUrl:
        'https://media-exp1.licdn.com/dms/image/C5603AQEWyS-Sc72l3g/profile-displayphoto-shrink_200_200/0/1632355300881?e=1667433600&v=beta&t=cYCF3aABnBZ20UJK3kqf2nhqatdu5q2zDivWme-8XkU',
      biography: 'Jogador de DotA e crossfiteiro',
      socialStatusId: 1,
      smokes: true,
      drinkingId: 1,
      signId: 1,
    },
  ];
  // setTimeout(async () => {
  for (const user of users) {
    await prisma.user.create({
      data: { ...user },
    });
  }
  // }, 1000);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
