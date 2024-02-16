class InventoryPage {
  elements = {
    items_container: () => cy.get('[id="inventory_container"][class="inventory_container"]'),
    items: () => cy.get('[class="inventory_item"]'),
    cart_icon: () => cy.get('[class="shopping_cart_link"]'),

    item_by_index: (index) => this.elements.items().eq(index),

    item_title: (index) => this.elements.item_by_index(index).find('[id^="item_"][id$="_title_link"]'),
    item_price: (index) => this.elements.item_by_index(index).find('[class="inventory_item_price"]'),
    item_add_to_cart_btn: (index) => this.elements.item_by_index(index).find('[id^="add-to-cart"]'),
    item_remove_btn: (index) => this.elements.item_by_index(index).find('[id^="remove"]')
  };

  openCart() {
    this.elements.cart_icon().click();
  }

  addItemToCart(index) {
    this.elements.item_add_to_cart_btn(index).click();
  }

  removeItemFromCart(index) {
    this.elements.item_remove_btn(index).click();
  }
}

export default new InventoryPage();
