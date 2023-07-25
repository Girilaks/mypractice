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

        // Open register hero and save new hero

        cy.get('#btnCreateHero').click();
        cy.get('#heroName')
        .type('giri').should('have.value', 'giri');
        cy.get('#genderMale').click();
        cy.get('#heroEyeColor')
        .type('yellow').should('have.value', 'yellow');
        cy.get('#heroMass')
        .type('65').should('have.value', '65');
        cy.get('#heroHeight')
        .type('165').should('have.value', '165');
        cy.get('#heroSkinColor')
        .type('blue').should('have.value', 'blue');
        cy.get('select[id="heroFilms"]').select('Film B')
        .should('have.value', 'Film B')
        cy.get('#btnAddHero').click();
        
        cy.get('.successMessage').find('span').then((e) => {
            const ele = e.text();
            expect(ele).to.contains('Hero is saved successfully and available for new movies.')
        })
    })
})