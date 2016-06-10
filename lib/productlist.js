
function ProductList () {
  this.products = [];
  this.total = 0;
}

function ProductList_getLength() {
  return this.products.length;
};

function ProductList_addProduct (product) {
  this.products.push(product);
  this.total += parseFloat(product.price, 10);
}


function ProductList_getTotalPrice () {
  return this.total;
}

ProductList.prototype.getLength = ProductList_getLength;

ProductList.prototype.addProduct = ProductList_addProduct;

ProductList.prototype.getTotalPrice = ProductList_getTotalPrice;

module.exports = ProductList;
