# backend-secret

### Executar testes E2E
- Primeiro, certifique se de que os containers estão de pé, para executar os testes. Caso não, execute:
``docker-compose up``

- Depois execute os testes: 
``npm run test:e2e``

Esses comandos executarão os testes na PORTA 3001, e criará um banco apenas para teste a porta 3307, sem que afete o banco de desenvolvimento ou produção.

### Rotas
A aplicação conta com Front End desenvolvido no repositório https://github.com/matheus-ferreira02/frontend-secret

Entretanto, caso o usuário deseje testar as rotas desenvolvidas no Back End da aplicação, utilizando os programas como Insomnia, Postman e afins, seguem os endereços.

### Rota de Autenticação (auth):

#### _.url/auth/signup - Rota de criação do usuário:

A requisição deve receber um req.body no seguinte modelo:
{
"firstName": "nomeDoUsuario",
"lastName": "sobrenomeDoUsuario",
"password": "senhaDoUsuario",
"username": "identificadorDoUsuario",
"email": "email@email.com"
}

Ao fazer a requisição, será validado:

- Se todos os campos estão preenchidos corretamente.
- Se já existe usuário com o e-mail ou username já cadastrado

Em caso de sucesso:

- A senha será criptografada
- O usuário será cadastrado no banco de dados
- Retornará um Token de acesso

Em caso de falha:

- Retorna uma mensagem de erro, indicando o erro da requisição

#### _.url/auth/signin - Rota de login do usuário
A requisição deve receber um req.body no seguinte modelo:
{
"user": "email@email.com ou username",
"password": "senhaDoUsuario"
}

Ao acessar esta rota, será validado:

- se o req.body está preenchido corretamente
- se o usuário está cadastrado no sistema, através do e-mail ou username 
- se a senha digitada é compatível com a senha criptografada no sistema

Em caso de sucesso:

- Retorna um Token de acesso

Em caso de falha:

- Retorna uma mensagem de erro, indicando o erro da requisição.





