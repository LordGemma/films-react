context('Search', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8082/')
    });

    it('type into serch field', () => {
        cy.get('.search-input')
        .type('test name of film').should('have.value', 'test name of film');
    })

    it('serch query', () => {
        cy.get('.search-input')
        .type('test name of film').should('have.value', 'test name of film');

        cy.get('.header')
        .find('button')
        .click();

        cy.get('.search-input')
        .should('have.value', '');

        cy.get('.radio-toolbar')
        .find('[type="radio"]')
        .first()
        .check({force: true});
    })
});