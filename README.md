# App de Vendas

Esse é um app de vendas, feito para Vx Case.

## Dependências

* Npm: 6.14.6
* Angular: 10.1.5
* Angular CLI: 10.1.4
* Node.js: 12.18.4

## Como executar?

Execute a sequência de comandos no seu terminal:

* `npm install` Para instalar as dependências
* `json-server --watch src/assets/data/db.json` Para inicializar o banco de dados Json. Caso queira verificar o seu funcionamento, após usar esse comando, vá ao seu navegador e procure pelo endereço de site `http://localhost:3000/vendas`, para abrir o banco de dados das vendas. E por ultimo o `http://localhost:3000/produtos`, para abrir o banco de dados dos produtos.
* `ng serve` Para inicializar o servidor do angular, e abra um outro terminal para isso, pois o primeiro estará sendo consumido pelo serve do json. Com isso, inicie o seu navegador e procure por pelo endereço de site `http://localhost:4200/`.

  


