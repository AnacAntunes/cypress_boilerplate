describe('Cenário de Testes WEB', () => {
  
  it('passou', () => {
    cy.visit('/')
  })

  it('falhou', { retries: { runMode: 2, openMode: 2 } }, () =>{
    cy.get('#elemento-inexistente').should('exist')
  })
})