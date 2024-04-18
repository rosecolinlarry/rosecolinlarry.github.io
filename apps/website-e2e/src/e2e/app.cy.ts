import { getToolbarText } from '../support/app.po';

describe('website-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display toolbar text message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getToolbarText().contains(/Angular/);
  });
});
