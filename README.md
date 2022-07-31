# backend-secret

### Executar testes de integração
- ``docker exec -it secret_api bash``
- ``npm run start:test`` ou ``PORT=3030 NODE_ENV=test npm run start:dev``
- Em outro terminal ``docker exec -it secret_api bash``
- ``npm test``

Esses comandos executaram os testes de integração na PORTA 3030 e criará um banco de dados apenas para teste, sem que afete o banco de desenvolvimento ou produção