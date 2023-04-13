describe('Cenário de Testes WEB', () => {
  
  it('passou', () => {
    cy.visit('/')
  })

  it('falhou', () =>{
    cy.get('#elemento-inexistente').should('exist')
  })
})