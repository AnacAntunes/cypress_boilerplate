# BOILERPLATE CYPRESS

O objetivo deste repositório é fornecer um ponto de partida inicial para a criação de testes automatizados com o framework Cypress.

### Recursos do Cypress
- [Documentação Oficial do Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)

- ![Cypress Version](https://img.shields.io/badge/cypress-12.8.1-brightgreen)


### Instalação:
Para iniciar um projeto node e instalar o Cypress como dependência de desenvolvimento, siga os seguintes passos:

1. Inicie um projeto node:
```npm init```

2. Instale o Cypress como depedência de dev:
```npm install cypress --save-dev```
### Sugestão de Estrutura de Pastas

```cypress/
  fixtures/
    api/
      example.json     // Arquivo JSON com dados para testes da API
    web/
      example.json     // Arquivo JSON com dados para testes de interface web
  support/
    commands.js        // Arquivo com comandos customizados
    e2e.js             // Arquivo com configurações adicionais para testes de e2e
  e2e/
    api/
      example_spec.js  // Testes da API
    web/
      example_spec.js  // Testes de interface web
  cypress.config.js    // Arquivo de configuração principal do Cypress
```
### Executar Testes

- ```npm run cy:test```
- ```npx cypress run --e2e```

### Desenvolvido por:
[![Ana Carolina D. A. dos Santos](https://img.shields.io/badge/GitHub-Perfil-%23181717?logo=github)](https://github.com/AnacAntunes/)

### Cobertura de Testes

[WIP] A cobertura de código atual dos testes é de {coverage_percentage}%.

### Status CI:

[![ci](https://github.com/AnacAntunes/cypress_initial/actions/workflows/ci.yml/badge.svg)](https://github.com/AnacAntunes/cypress_initial/actions/workflows/ci.yml)