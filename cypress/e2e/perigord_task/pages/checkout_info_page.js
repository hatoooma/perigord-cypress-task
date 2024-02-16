class CheckoutInfoPage {
  elements = {
    first_name_input: () => cy.get('[data-test="firstName"]'),
    last_name_input: () => cy.get('[data-test="lastName"]'),
    postal_code_input: () => cy.get('[data-test="postalCode"]'),

    continue_btn: () => cy.get('[data-test="continue"]'),
    cancel_btn: () => cy.get('[data-test="cancel"]')
  };

  fillInCheckoutInfo(firstName, lastName, postalCode) {
    this.elements.first_name_input().type(firstName);
    this.elements.last_name_input().type(lastName);
    this.elements.postal_code_input().type(postalCode);
  }

  continueCheckout() {
    this.elements.continue_btn().click();
  }
}

export default new CheckoutInfoPage();
