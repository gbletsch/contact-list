# TOC
## Aula 1:
* Inicializar backend: 35 min
  ```shell
  npm init -y
  npm install express
  ```
  create index.js (39 min)

* Inicializar frontend: 58 min
  ```shell
  npx create-react-app frontend
  ```

## Aula 2:
### Mudar para a pasta backend
* Métodos HTTP: 8 min
* Tipos de parâmetros: 14 min
* Use JSON nas requisições: 22 min
* Instalar nodemon: 23 min
* Banco de dados: 28 min
  * Knex: 30 min
  ```shell
  npm install knex
  ```
  * Driver para SQLite: 
  ```
  npm install sqlite3
  ```
  * init knex: 31 min 30 seg
  ```shel
  npx knex init
  ```

* Criando pasta /src: 31 min
* Criando routes.js: 33 min
* Criando pasta database: 35 min
* Pensar nas entidades e funcionalidades: 35 min
* migrations: 39 min, 46:30
* criar rotas: 51 min
  * crypto: 54 min
* connect to db: 55 min
* refact to controllers: 1h 1 min
* 1:05 - controllers para os incidents
* 1:10 - Authorization no header
* 1:25 - paginação

# Aula 3
* limpando os arquivos: 4 min
* explicando o react: 8 min
* propriedades e estado: 10 min
  * componentes: 11 min
  * propriedades: 14 min
  * estado: 20 min
* Logon: 25 min
  * fonts.google.com: 27 min
  * global.css: 27 min
  * estrutura logon: 30 min
  * npm install react-icons: 35 min
  * estilizar logon: 37 min
  * estilizar input e button no global: 38 min
* configurar rotas: 44 min
  * component Link: 48 min
* page Register: 49 min
  * estilizar Register: 54 min
* classe back-link no global.css: 51 min
* page Profile: 58 min
  * estilizar header: 1:01
  * 
  








# Kill process
```shell
sudo kill -9 $(sudo lsof -t -i:3333)
```

# Response from create-react-app
Created git commit.

Success! Created frontend at /home/gui/dev/clinic_management_system/frontend
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd frontend
  yarn start

Happy hacking!