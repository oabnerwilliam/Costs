# Projeto Costs - Controle de Despesas Pessoais

## Descrição

O Costs é uma aplicação desenvolvida com React para ajudar usuários a controlar suas despesas pessoais. O sistema permite adicionar despesas, categorizar, visualizar o total gasto e filtrar as despesas por categoria e data.

## Tecnologias Utilizadas

* React: Biblioteca JavaScript para construção da interface de usuário e gerenciamento de estado.
* CSS: Estilização da interface.
* JavaScript: Linguagem usada para manipulação de dados e lógica de negócios.
* LocalStorage (se implementado): Para persistir as despesas entre sessões.

## Funcionalidades

* **Adicionar Despesas:** O usuário pode cadastrar novas despesas com valores, categorias e datas.
* **Visualizar Despesas:** As despesas cadastradas ficam visíveis em uma lista, exibindo o valor, categoria e data.
* **Filtrar Despesas:** O usuário pode filtrar as despesas por categoria ou data, facilitando a visualização de custos específicos.
* **Cálculo do Total:** A aplicação calcula automaticamente o total gasto com base nas despesas cadastradas.
* **Responsividade:** A interface é responsiva e funciona bem em diferentes tamanhos de tela, incluindo dispositivos móveis.

## Como Rodar o Projeto

### Passos

1.  Clone o repositório:

    ```bash
    git clone [https://github.com/seu-usuario/costs.git](https://github.com/seu-usuario/costs.git)
    ```

2.  Acesse o diretório do projeto:

    ```bash
    cd costs
    ```

3.  Instale as dependências:

    ```bash
    npm install
    ```

# Instruções para Configuração do Banco de Dados

## Como Configurar o Banco de Dados

Antes de executar o projeto, você precisa criar o banco de dados local. Siga os passos abaixo:

1.  **Execute o script de configuração do banco de dados:**

    ```bash
    npm run setup-db
    ```

    Este comando criará um arquivo `db.json` baseado no modelo definido em `dbmodel.json`.

2.  **Inicie o servidor do projeto:**

    ```bash
    npm start
    ```

    Este comando iniciará o servidor usando o banco de dados `db.json` que você acabou de criar, e abrirá o projeto no navegador em `http://localhost:3000`

## Requisitos

* Node.js e npm instalados no seu sistema.

## Observações

* Certifique-se de que o arquivo `dbmodel.json` esteja presente no diretório raiz do projeto.
* O script `setup-db` utiliza o modelo em `dbmodel.json` para criar a estrutura inicial do banco de dados em `db.json`.

## Como Contribuir

1.  Faça um fork deste repositório.
2.  Crie uma branch para a sua feature (`git checkout -b minha-feature`).
3.  Faça as modificações desejadas.
4.  Adicione as modificações ao staging (`git add .`).
5.  Faça o commit das alterações (`git commit -m 'Adiciona nova funcionalidade'`).
6.  Envie para o repositório remoto (`git push origin minha-feature`).
7.  Abra um Pull Request para a branch principal.
