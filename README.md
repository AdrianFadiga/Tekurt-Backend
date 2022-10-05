# Tekurt-BackEnd:


Tekurt é uma rede social inspirada no Orkut.

A aplicação foi desenvolvida por Adrian Fadiga e Matheus Ferreira.

O Front-End da aplicação está no seguinte repositório:

https://github.com/AdrianFadiga/Tekurt-Frontend

## Das tecnologias utilizadas:

JavaScript, TypeScript, Node.Js, Express, NestJS, Prisma, Jest e Docker.


## Para inicializar a aplicação:


Para que a aplicação seja inicializada, o usuário deverá seguir os seguintes passos:


### 1) Clonar o repositório


``git clone git@github.com:AdrianFadiga/Tekurt-Backend.git``


### 2) Subir os containeres da aplicação


No diretório raiz do projeto, rodar o seguinte comando:

``docker-compose up``


### 3) Acessar o terminal do container tekurt_api



``docker container exec -it tekurt_api bash``


### 4) Criar o Banco de Dados e gerar as seeders

#### Atenção: os próximos comandos serão executados dentro do terminal do container!!!

``npx prisma db push --force-reset && npx prisma db seed``


### 5) Inicializar a aplicação


``npm start``


## Das rotas


Recomendamos que seja utilizado o Front-End da aplicação, no repositório 
https://github.com/AdrianFadiga/Tekurt-Frontend

Entretanto, caso o usuário deseje apenas testar as rotas, estas estão documentadas através no Swagger, no seguinte link:

http://localhost:3000/api#/


## Das seeders (usuários cadastrados)


A aplicação conta com três usuários cadastrados.
Para fazer login com alguma das contas, basta utilizar:

username: usuario
senha: teste

username: adrianfadiga
senha: teste

username: theusferreira
senha: teste

## Dos testes
### Testes e2e

``npm run test:e2e``

Esses comandos executarão os testes na PORTA 3001, e criará um banco apenas para teste a porta 3307, sem que afete o banco de desenvolvimento ou produção.

### Testes unitários

``npm run test:cov``