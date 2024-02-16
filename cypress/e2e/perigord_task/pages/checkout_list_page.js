class CheckoutListPage {
  elements = {
    items: () => cy.get('[class="cart_item"]'),

    sub_total_items: () => cy.get('[class="summary_subtotal_label"]'),
    total_tax: () => cy.get('[class="summary_tax_label"]'),
    total_price: () => cy.get('[class$="summary_total_label"]'),

    finish_btn: () => cy.get('[data-test="finish"]'),
    cancel_btn: () => cy.get('[data-test="cancel"]')
  };

  finishCheckout() {
    this.elements.finish_btn().click();
  }
}

export default new CheckoutListPage();
