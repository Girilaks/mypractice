context('End-to-end test', () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/login")
    })

    it("login", () => {
        cy.get('#userName')
        .type('myuser').should('have.value', 'myuser');
        cy.get('#password')
        .type('password').should('have.value', "password");
        cy.get('#btnLogin').click();
        cy.url().should('eq', 'http://localhost:4200/heros');
    })
})