import { Then } from '@badeball/cypress-cucumber-preprocessor';
import CartPage from '../pages/cart_page';

Then('the number of products in the cart should remain the same', () => {
  const cartItemsCount = Cypress.env('cartItems');

  CartPage.elements.cart_count().should('have.text', cartItemsCount);
  CartPage.elements.items().should('have.length', cartItemsCount);
});
