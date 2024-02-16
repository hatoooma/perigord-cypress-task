import { Then } from '@badeball/cypress-cucumber-preprocessor';
import CheckoutInfoPage from '../pages/checkout_info_page';

import * as testData from '../../../fixtures/test_data.json';

Then('I complete the checkout form with valid information', () => {
  const firstName = testData.checkout_info.first_name;
  const lastName = testData.checkout_info.last_name;
  const postalCode = testData.checkout_info.postal_code;

  CheckoutInfoPage.fillInCheckoutInfo(firstName, lastName, postalCode);
});
