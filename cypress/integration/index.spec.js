describe('Main App', () => {
  beforeEach(() => cy.visit('/'));
  it('should have header text', () => {
    const headerText = 'Get awesome facts about Chuck Norris';
    cy.get('h1').should('exist');
    cy.get('h1').should('contain', headerText);
  });
  it('should have button', () => {
    const buttonText = 'Get Fact';
    cy.get('button').should('exist');
    cy.get('button').should('have.class', 'btn btn--primary');
    cy.get('button').should('have.text', buttonText);
  });

  it('should not have any quote on load', () => {
    cy.get('.app__quote-text').should('exist');
    cy.get('.app__quote-text').should('have.text', '');
  });

  it('should have button disabled after click', () => {
    cy.get('button').click().should('be.disabled');
  });

  it('should show fact after button is clicked', () => {
    cy.get('button').click();
    cy.get('.app__quote-text').should('exist');
    cy.get('.app__loading').should('not.exist');
  });
});
