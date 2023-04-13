# BOILERPLATE CYPRESS

Cypress - 12.8.1

## DOCUMENTAÇÃO OFICIAL

https://docs.cypress.io/guides/getting-started/installing-cypress 

## INSTALL

npm install cypress --save-dev

## SUGESTÃO PARA ESTRUTURA DE PASTAS

cypress/
  fixtures/
    api/
      example.json     // Arquivo JSON com dados para testes da API
    web/
      example.json     // Arquivo JSON com dados para testes de interface web
  support/
    commands.js        // Arquivo com comandos customizados
    e2e.js             // Arquivo com configurações adicionais para testes de ponta a ponta
  e2e/
    api/
      example_spec.js  // Testes da API
    web/
      example_spec.js  // Testes de interface web
  cypress.config.js    // Arquivo de configuração principal do Cypress


## EXECUTAR

npm run cy:test

ou

*Chrome:* npx cypress run -b chrome

## DESENVOLVIDO POR:
[Ana Carolina](https://github.com/AnacAntunes/)

## COBERTURA E STATUS

[WIP] A cobertura de código atual dos testes é de {coverage_percentage}%.

[![ci](https://github.com/AnacAntunes/cypress_initial/actions/workflows/ci.yml/badge.svg)](https://github.com/AnacAntunes/cypress_initial/actions/workflows/ci.yml)