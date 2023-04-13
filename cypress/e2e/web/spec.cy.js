describe('Cenário de Testes WEB', () => {
  
  it('passou', () => {
    cy.visit('/')
  })


  //Cenário de Falha
  // it('falhou', () =>{
  //   cy.get('#elemento-inexistente').should('exist')
  // })
})