class CartPage {
  elements = {
    items_container: () => cy.get('[class="cart_list"]'),
    items: () => cy.get('[class="cart_item"]'),
    cart_count: () => cy.get('[class="shopping_cart_link"]').find('span'),

    item_by_index: (index) => this.elements.items().eq(index),

    checkout_btn: () => cy.get('[data-test="checkout"]'),
    continue_shopping_btn: () => cy.get('[data-test="checkout"]')
  };

  openCheckout() {
    this.elements.checkout_btn().click();
  }
}

export default new CartPage();
