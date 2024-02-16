import { When } from '@badeball/cypress-cucumber-preprocessor';
import InventoryPage from '../pages/inventory_page';

When('I add {int} items to the cart', (numOfItem) => {
  for (let i = 0; i < numOfItem; i++) {
    InventoryPage.addItemToCart(i);
  }
  Cypress.env('cartItems', numOfItem);

  // calculate the total price of the selected items
  let subTotalPrice = 0;
  InventoryPage.elements.items().each(($el) => {
    if ($el.find('[id^="remove"]').length > 0) {
      const price = parseFloat($el.find('[class="inventory_item_price"]').text().replace('$', ''));
      subTotalPrice += price;

      Cypress.env('subTotalPrice', subTotalPrice);
    }
  });
});
