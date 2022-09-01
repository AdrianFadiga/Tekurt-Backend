import { prisma } from '../prismaClient';

async function main() {
  // Criar as seeders socialStatus, drinking e sign já com o Id
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
      // socialStatusId: '4a19fdb8-01f2-440d-9fcb-0c783ff08235',
      smokes: false,
      // drinkingId: '14d04fed-a88b-43c3-aad4-2c41c08c9640',
      // signId: '22c26c70-9cdb-4a2e-9d67-8750a09e6ea3',
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
      // socialStatusId: '4a19fdb8-01f2-440d-9fcb-0c783ff08235',
      smokes: false,
      // drinkingId: '14d04fed-a88b-43c3-aad4-2c41c08c9640',
      // signId: '22c26c70-9cdb-4a2e-9d67-8750a09e6ea3',
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
      // socialStatusId: 'dbc7960f-6fbd-4dc3-a4f8-80daf9ac9de8',
      smokes: true,
      // drinkingId: '44da1f1e-82c4-4c2e-9ad4-9e410e02d57f',
      // signId: '3a6d1933-4af9-419d-a04f-9783deda08f6',
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
