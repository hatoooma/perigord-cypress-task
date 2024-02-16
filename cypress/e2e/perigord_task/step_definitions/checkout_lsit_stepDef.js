import { Then } from '@badeball/cypress-cucumber-preprocessor';
import CheckoutListPage from '../pages/checkout_list_page';

Then('the number of products in the checkout list should remain the same', () => {
  const cartItemsCount = Cypress.env('cartItems');

  CheckoutListPage.elements.items().should('have.length', cartItemsCount);
});

Then('the sum of products prices in the checkout list should be the same as in the cart', () => {
  const subTotalPrice = Cypress.env('subTotalPrice');

  CheckoutListPage.elements.sub_total_items().then(($el) => {
    const subTotal = parseFloat($el.text().replace('Item total: $', ''));
    expect(subTotal).to.eq(subTotalPrice);
  });
});
