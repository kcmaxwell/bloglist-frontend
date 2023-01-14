describe('Blog app', () => {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:3003/api/testing/reset');
    const user = {
      name: 'Kristopher Maxwell',
      username: 'kcmaxwell',
      password: 'password123',
    };
    cy.request('POST', 'http://localhost:3003/api/users', user);
    cy.visit('http://localhost:3000');
  });

  it('Login form is shown', () => {
    cy.contains('Login');
  });

  describe('Login', () => {
    it('succeeds with correct credentials', () => {
      cy.get('#username-input').type('kcmaxwell');
      cy.get('#password-input').type('password123');
      cy.get('#login-button').click();

      cy.get('.success-message')
        .should('contain', 'Kristopher Maxwell logged in');
    });

    it('fails with wrong credentials', () => {
      cy.get('#username-input').type('kcmaxwell');
      cy.get('#password-input').type('wrongPassword');
      cy.get('#login-button').click();

      cy.get('.error-message')
        .should('contain', 'Wrong username or password')
        .and('have.css', 'color', 'rgb(255, 0, 0)');
    });
  });
});
