import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/login_page';
import InventoryPage from '../pages/inventory_page';
import CartPage from '../pages/cart_page';
import CheckoutInfoPage from '../pages/checkout_info_page';
import CheckoutListPage from '../pages/checkout_list_page';

import * as routes from '../../../fixtures/routes.json';

Given('I am on the Sauce Demo website', () => {
  cy.visit('/');
  cy.viewport('macbook-16');
});

Then('I should be on the {string} page', (page) => {
  cy.url().should('eq', Cypress.config().baseUrl + routes[page]);
});

When('I login with username {string} and password {string}', (username, password) => {
  LoginPage.login(username, password);
});

When(/^I click on the "(.*?)" (button|icon)$/, (ele) => {
  const target = ele;

  switch (target) {
    case 'cart':
      InventoryPage.openCart();
      break;
    case 'checkout':
      CartPage.openCheckout();
      break;
    case 'continue':
      CheckoutInfoPage.continueCheckout();
      break;
    case 'finish':
      CheckoutListPage.finishCheckout();
      break;
    default:
      throw new Error(`Unknown target: ${target}`);
  }

  cy.log('Clicking on the button', ele);
});
