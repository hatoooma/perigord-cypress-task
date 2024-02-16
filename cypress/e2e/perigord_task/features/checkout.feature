Feature: Checkout Process

  Background:
    Given I am on the Sauce Demo website
    And I login with username "standard_user" and password "secret_sauce"
    And I should be on the "inventory" page
    And I add 3 items to the cart
    And I click on the "cart" icon

  Scenario: Verify Items in Cart
    Then I should be on the "cart" page
    And the number of products in the cart should remain the same

  Scenario: Proceed to Checkout
    When I click on the "checkout" button
    Then I should be on the "checkout_info" page

  Scenario: Fill Checkout Information
    When I click on the "checkout" button
    And I complete the checkout form with valid information
    And I click on the "continue" button
    Then I should be on the "checkout_list" page

  Scenario: Verify Items in Checkout
    When I click on the "checkout" button
    And I complete the checkout form with valid information
    And I click on the "continue" button
    Then the number of products in the checkout list should remain the same
    And the sum of products prices in the checkout list should be the same as in the cart

  Scenario: Finalize Checkout
    When I click on the "checkout" button
    And I complete the checkout form with valid information
    And I click on the "continue" button
    And I click on the "finish" button
    Then I should be on the "inventory" page
