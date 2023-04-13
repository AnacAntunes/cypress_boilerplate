# BOILERPLATE CYPRESS

O objetivo deste repositório é fornecer um ponto de partida inicial para a criação de testes automatizados com o framework Cypress.

### DOCUMENTAÇÃO OFICIAL E VERSÃO
[Cypress Documentation](https://docs.cypress.io/guides/getting-started/installing-cypress)

![Cypress Version](https://img.shields.io/badge/cypress-12.8.1-brightgreen)

### INSTALAÇÃO
1. Inicie um projeto node, utilizando o comando:
```npm init```
2. Instale o Cypress como depedência de dev:
```npm install cypress --save-dev```
### SUGESTÃO PARA ESTRUTURA DE PASTAS

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
### EXECUTAR

```npm run cy:test```
ou
*Chrome:* ```npx cypress run --e2e```

### DESENVOLVIDO POR:
[![Ana Carolina D. A. dos Santos](https://img.shields.io/badge/GitHub-Perfil-%23181717?logo=github)](https://github.com/AnacAntunes/)

### COBERTURA E STATUS

[WIP] A cobertura de código atual dos testes é de {coverage_percentage}%.

[![ci](https://github.com/AnacAntunes/cypress_initial/actions/workflows/ci.yml/badge.svg)](https://github.com/AnacAntunes/cypress_initial/actions/workflows/ci.yml)