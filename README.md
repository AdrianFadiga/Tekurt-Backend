# backend-secret

### Executar testes E2E
- Primeiro, certifique se de que os containers estão de pé, para executar os testes. Caso não, execute:
  ``docker-compose up``

- Depois execute os testes: 
  ``npm run test:e2e``

Esses comandos executaram os testes na PORTA 3001, e criará um banco apenas para teste a porta 3307, sem que afete o banco de desenvolvimento ou produção