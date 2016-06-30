'use strict';
var ProductList = require('../../lib/productlist.js');

function Steps_addAnotherProduct() {
  var productList = undefined;
  var productsTable;

    this.Before(function(scenario) {
      productList = new ProductList();
      if(scenario.getName() === 'The user adds another product'){
        productList.addProduct({
          name: "Hot Dog",
          price: 100
        });
      }
    });

    this.After(function(scenario) {
      productList = undefined;
    });


    this.Given(/^there is at least (\d+) product selected$/, function (quantity, callback) {
     assert.isAtLeast(productList.getLength(), quantity, 'Product list is greater or equal to 1');
     callback();
    });

    this.When(/^the user adds a new product$/, function (callback) {
     productList.addProduct({
      name: "Pizza",
      price: 300
     });
     callback();
    });

    this.Then(/^product list length should be at least (\d+)$/, function (length, callback) {
     assert.isAtLeast(productList.getLength(), length, 'Product list is greater or equal to 2');
     callback();
    });


    //-- SCENARIO: Total price is updated when a new product is added
    this.Given(/^there are the next products selected$/, function (table, callback) {
      expect(productList.getLength()).to.be.equal(0);
     productsTable = table.rows();
     productsTable.forEach(function(fila) {
      productList.addProduct({
          name: fila[0],
          price: parseFloat(fila[1], 10)
        })
     });
     callback();
    });

    this.When(/^the user adds a new product with name "([^"]*)" and price (\d+)$/, function (name, price, callback) {
     productList.addProduct({
      name: name,
      price: parseFloat(price, 10)
     });
     callback();
    });

    this.Then(/^total price will be (\d+)$/, function (total, callback) {
     expect(productList.getTotalPrice()).to.be.equal(parseInt(total, 10))
     callback();
    });
}

module.exports = Steps_addAnotherProduct;