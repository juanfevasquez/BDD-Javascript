var ProductQuantities = require('../../lib/product_quantities.js');


function Steps() {

      var currentProduct = undefined;

      this.Before(function (scenario) {
        currentProduct = new ProductQuantities();
      });

      this.After(function (scenario) {
        currentProduct = undefined;
      });

      /**
      * Scenario: Increase a product's quantity
      */
      this.Given(/^an order has a product with quantity of (\d+)$/, function (quantity, callback) {
        quantity = parseInt(quantity, 10);
        expect(currentProduct.getCurrentQuantity()).to.be.equal(quantity);
        callback();
       });

      this.When(/^the user increments this product's quantity$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });

      this.Then(/^this product's quantity will be (\d+)$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });



}

module.exports = Steps;