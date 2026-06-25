# 🚀 Banco API Performance Tests

## 📖 Introdução

Projeto de testes de performance desenvolvido com **JavaScript** e
**K6** para avaliação de desempenho da API REST do projeto Banco API.

## 🛠 Tecnologias Utilizadas

-   JavaScript
-   K6
-   Node.js
-   Git

## 📁 Estrutura do Repositório

``` text
.
├── tests/ #Casos de testes
├── fixtures/ # Dados de Entrada
├── helpers/ # Funções utilitárias reutilizaveis para interação com a API
├── utils/ # Funções utilitárias
├── config/ # Arquivo de configuração de variáveis de ambiente
└── README.md
```

## 📂 Objetivo de cada grupo de arquivos

-   **tests/**: cenários de testes (smoke, load, stress e spike).
-   **fixtures/**:  Dados de Entrada.
-   **utils/**: funções reutilizáveis.
-   **config/**: configurações globais.
-   **helpers/**: Funções utilitárias reutilizaveis para interação com a API.

## ⚙️ Instalação

``` bash
git clone https://github.com/cmls-gama/banco-api-performance
cd banco-api-performance
npm install
```

## ⚙️ Configure as Variáveis de Ambiente

Altere o arquivo `config\config.local.json` e defina a URL base da API a ser testada:

```json
{
    "baseUrl": "http://localhost:3000"
}
```

Essas variáveis serão usadas dinamicamente nos testes para montar as requisições.

## ▶️ Execução

```bash
k6 run tests/load/load-test.js
```

Execução simples:

``` bash
k6 run tests/load/load-test.js -e BASE_URL=http://localhost:3000
```

Dashboard em tempo real:

``` bash
K6_WEB_DASHBOARD=true k6 run tests/load/load-test.js -e  BASE_URL=http://localhost:3000 
```

Exportação do relatório:

``` bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/load/load-test.js -e BASE_URL=http://localhost:3000
```
