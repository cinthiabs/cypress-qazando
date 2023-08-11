describe('Novidades',()=>{
    it('Cadastrar email com sucesso', () =>{
        //acessar aplicação
        cy.visit('/')
       
        //selecionar o elemento
        cy.get('.form-control')
          .type('cinthiabarbosa8d@outlook.com')//ação

        //selecionar o elemento
        cy.get('.clear .theme-btn-one.btn_md')
          .click()//ação

        //assert
        cy.get('#swal2-title')
        .should('be.visible')//elemento sucesso visivel na tela
        .should('have.text','Success')//validação do texto


       // cy.get('.swal2-confirm')
       // .click()
    })//caso de teste, cenario

    it('Cadastrar email com sucesso apertando Enter', () =>{
        cy.visit('/')
       
        cy.get('.form-control')
          .type('cinthiabarbosa8d@outlook.com{enter}')

        cy.get('#swal2-title')
        .should('be.visible')//elemento sucesso visivel na tela
        .should('have.text','Success')//validação do texto

    })//caso de teste, cenario

    it('Verificar fechamento da mensagem de sucesso', () =>{
        cy.visit('/')
       
        cy.get('.form-control')
          .type('cinthiabarbosa8d@outlook.com{enter}')

        cy.get('.swal2-actions .swal2-confirm')
        .click()

        cy.wait(500)

        cy.get('#swal2-title')
        .should('not.exist')//elemento nao visivel na tela

    })//caso de teste, cenario
})