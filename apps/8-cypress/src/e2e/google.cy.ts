/* eslint-disable @typescript-eslint/no-empty-function */
describe('https://www.google.com', () => {
  before(() => cy.visit('http://www.google.com'));

  it('search Spotify on google', () => {
    cy.get('#L2AGLb').click();
    cy.get('.gLFyf').type('Spotify{enter}');
  });

  it('should go to page 2', () => {
    cy.get('table.AaVjTc tr').first().find('td').eq(2).click();
    cy.get('#L2AGLb').click();
  });

  it('should go back to the previous page', () => {
    cy.go('back');
  });
});
