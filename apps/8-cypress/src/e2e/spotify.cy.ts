/* eslint-disable @typescript-eslint/no-empty-function */
describe('https://www.spotify.com/fr/signup', () => {
  before(() => {
    cy.visit('https://www.spotify.com/fr/signup')
    cy.get('#onetrust-accept-btn-handler').click();
  });

  it('should enter an invalid email format and display an error', () => {
    cy.get('[type="email"').first().parent().find('.hngMxV').should('not.exist');
    cy.get('[type="email"]').first().type('invalid@').blur();
    cy.get('[type="email"').first().parent().find('.hngMxV').should('exist');
  });

  it.only('should enter the email a@a.com and suggest to connect', () => {
    cy.get('[type="email"]').first().clear().type('foo@bar7854236.com').blur();
  });
});
