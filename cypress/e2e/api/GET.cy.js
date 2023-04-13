describe('Cenário de Testes de API', () => {
    it('deve retornar um status 200 ao chamar a API', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200);
    });

    //Cenário de Falha
    // it('deve retornar um status 404 ao chamar uma API inexistente', () => {
    //   cy.request({
    //     method: 'GET',
    //     url: 'https://jsonplaceholder.typicode.com/posts/111999',
    //     failOnStatusCode: true
    //   }).its('status')
    //     .should('equal', 404);
    // })
  })
  