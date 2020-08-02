describe('Main App', () => {
  beforeEach(() => cy.visit('/'));
  it('should have header text', () => {
    const headerText = 'Get awesome facts about Chuck Norris';
    cy.get('h1').should('exist');
    cy.get('h1').should('contain', headerText);
  });
  it('should have button to get facts', () => {
    const buttonText = 'Get Fact';
    cy.get('.app__getQuote').should('exist');
    cy.get('.app__getQuote').should(
      'have.class',
      'btn btn--primary app__getQuote',
    );
    cy.get('.app__getQuote').should('have.text', buttonText);
  });
  it('should have button to toggle rtl', () => {
    const buttonText = 'Toggle RTL';
    cy.get('.app__toggleRTL').should('exist');

    cy.get('.app__toggleRTL').should(
      'have.class',
      'btn btn--transparent app__toggleRTL',
    );
    cy.get('.app__toggleRTL').should('have.text', buttonText);
  });

  it('should not have any quote on load', () => {
    cy.get('.app__quote-text').should('exist');
    cy.get('.app__quote-text').should('have.text', '');
  });

  it('should have button disabled after click', () => {
    cy.get('.app__getQuote').click().should('be.disabled');
  });

  it('should show fact after button is clicked', () => {
    cy.get('.app__getQuote').click();
    cy.get('.app__quote-text').should('exist');
    cy.get('.app__loading').should('not.exist');
  });

  it('should toggle site to RTL view when right button is clicked', () => {
    cy.get('.app__toggleRTL').click();
    cy.get('html').should('have.attr', 'dir', 'rtl');
  });
  it('should toggle site to LTR view when right button is clicked in RTL', () => {
    cy.get('.app__toggleRTL').click();
    cy.get('.app__toggleRTL').click();
    cy.get('html').should('have.attr', 'dir', 'ltr');
  });
});
