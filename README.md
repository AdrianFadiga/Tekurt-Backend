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
- Se existe usuário com o e-mail ou username já cadastrado

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

- se o corpo da requisição está preenchido corretamente
- se o usuário está cadastrado no sistema, através do e-mail ou username 
- se a senha digitada é compatível com a senha criptografada no sistema

Em caso de sucesso:

- Retorna um Token de acesso

Em caso de falha:

- Retorna uma mensagem de erro, indicando o erro da requisição.

### Rota de usuário (users)

Todas as requisições feitas para a rota de usuários devem conter o req.headers no seguinte formato:

{
    Authorization: "Bearer <Token>"
}

#### GET _.url/users - Rota read
Esta rota retorna a lista de todos os usuários cadastrados.

Ao acessar esta rota:

- Será validado se o Token informado é válido
- Será retornada a lista com os dados de todos os usuários, com exceção das suas senhas

#### GET _.url/users/:username – readOne
Esta rota deve retornar as informações de um usuário, com base no seu username
Ao acessar esta rota:

- Será validado se o Token informado é válido
- Será validado se existe usuário com o username informado
Em caso de sucesso, a requisição retornará os dados do usuário com o username informado

Em caso de falha: 
- Retornará uma mensagem de erro, informando o erro da requisição.



#### PUT ._url/users/:id – update

Esta rota deve atualizar os dados do usuário cadastrado.

Esta rota deve receber o seguinte req.body:
{
“firstName”: “nome”,
“lastName”: “sobrenome”,
“username”: “username”,
“email”: “email@email.com”,
“imageUrl”: “fotoDePerfil.url” (opcional),
“socialStatusId”: “socialStatusId” (opcional),
“children”: “true/false” (opcional),
“smokes”: “true/false” (opcional),
“drinkingId”: “drinkingId” (opcional),
“signId”: “signId” (opcional),
“biography”: “biografia” (opcional)
}

Ao acessar esta rota, será validado:

- Se o Token informado é válido;
- Se o corpo da requisição foi preenchido corretamente;
- Se o id do usuário que está sendo modificado é o mesmo id do usuário logado no sistema;

Em caso de sucesso:

- As informações do usuário serão atualizadas.
- Retornará uma response vazia, com o status ok.

Em caso de falha:

- Retornará uma mensagem de erro.

#### DELETE ._url/users/:id – delete
Esta rota deve deletar o usuário.

Ao acessar esta rota, será validado:

- Se o Token informado é válido;
- Se o id do usuário que está sendo modificado é o mesmo id do usuário logado no sistema

Em caso de sucesso:

- O usuário é deletado;
- O Token passa a ser inválido para novas requisições;
- Retorna uma resposta com o status ok
Em caso de falha:
- Retorna mensagem de erro