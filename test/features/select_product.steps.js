
var ProductList = require('../../lib/productlist.js');


function Steps() {

      var emptyProductList = undefined, 
        productsTable = [];

      this.Before(function (scenario) {
        emptyProductList = new ProductList();
      });

      this.After(function (scenario) {
        emptyProductList = undefined;
      });

      /**
      * Scenario: Update product list size
      */
      this.Given(/^an order with (\d+) products$/, function (quantity, callback) {
        quantity = parseInt(quantity, 10);
        expect(emptyProductList.getLength()).to.be.equal(quantity);
        callback();
      });

      this.When(/^the user selects a product$/, function (callback) {
        emptyProductList.addProduct(new Object());
        callback();
      });

      this.Then(/^the order product's quantity will be (\d+)$/, function (quantity, callback) {
        quantity = parseInt(quantity, 10);
        expect(emptyProductList.getLength()).to.be.equal(quantity);
        callback();
      });


      /**
      * Scenario: Update order total price according to product
      */
      this.Given(/^the next product table:$/, function (table, callback) {
        productsTable = table.rows();
        callback();
      });

      this.When(/^the user selects the product (.*)$/, function (product, callback) {
        productsTable.forEach(function(fila){
          if(fila[0]===product){
            emptyProductList.addProduct({
              name: fila[0],
              price: parseFloat(fila[1], 10)
            });
          }
        });
        callback();
      });
      this.When(/^the product (.*)$/, function (product, callback) {
         productsTable.forEach(function(fila){
          if(fila[0]===product){
            emptyProductList.addProduct({
              name: fila[0],
              price: parseFloat(fila[1], 10)
            });
          }
        });
        callback();
      });


      this.Then(/^the total price will be (\d+)$/, function (total, callback) {
        total = parseFloat(total, 10);
        expect(emptyProductList.getTotalPrice()).to.be.equal(total);
       callback();
      });


}

module.exports = Steps;
