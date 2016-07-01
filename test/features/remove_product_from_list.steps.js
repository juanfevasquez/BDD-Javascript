var ProductList = require('../../lib/productlist.js');

function Steps() {
  var productList = undefined;
  this.Before(function(scenario) {
      productList = new ProductList();
      productList.addProduct({
        name: "Pizza",
        price: 100
      });
      productList.addProduct({
        name: "Hamburger",
        price: 100
      });
      productList.addProduct({
        name: "Hot Dog",
        price: 100
      });
      productList.addProduct({
        name: "Female dog",
        price: 100
      });
      productList.addProduct({
        name: "Shukos",
        price: 100
      });
    });

    this.After(function(scenario) {
      productList = undefined;
    });

  var list_length;

  this.Given(/^there are products in the list$/, function (callback) {
     expect(productList).not.to.be.empty;
     callback();
   });

  this.Given(/^length is greater or equal than (\d+)$/, function (length, callback) {
    list_length = productList.getLength();
     assert.isAtLeast(productList.getLength(), parseInt(length, 10), 'Product list is greater or equal to 1');
     callback();
   });

  this.When(/^I remove a product$/, function (callback) {
     productList.removeProduct({name: "Hot Dog"});
     callback();
   });

  this.Then(/^the length of the list should decrease in (\d+)$/, function (arg1, callback) {
    arg1 = parseInt(arg1, 10);
     expect(productList.getLength()).to.be.equal(list_length - arg1);
     callback();
   });

}

module.exports = Steps;