/* eslint-disable @typescript-eslint/no-empty-function */
describe('https://localhost:4200 - Todos', () => {
  before(() => cy.visit('http://localhost:4200'));

  it('should go to the "todos" page when clicking on "Todos"', () => {
    cy.get('a').click();
    cy.url().should('include', 'todos');
  });

  it('should have a least one todo and a maximum of 10 todos', () => {
    cy.get('advanced-angular-course-todos').find('a').should('have.length.within', 1, 10);
  });

  it('should go to the todo page when clicking on a todo', () => {
    cy.get('advanced-angular-course-todos').find('a').first().click();
    cy.url().should('include', 'todos/1');
  });

  it('should go back to the todos page', () => {
    cy.go('back');
    cy.url().should('eq', 'http://localhost:4200/todos');
  })

  it('should go to the todo page when clicking on a todo but the call is intercepted and a completed task is displayed', () => {
    cy.intercept('**/todos/*', { userId: 1, id: 2, title: 'Dinis', completed: true }).as('todo');
    cy.get('advanced-angular-course-todos').find('a').first().click();
    cy.wait('@todo');
  });
});
