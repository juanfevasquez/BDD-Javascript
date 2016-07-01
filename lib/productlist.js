
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

function ProductList_removeProduct(product) {
  var item, i;
  for(i= 0; i < this.products.length; i++) {
    item = this.products[i];
    if(item.name === product.name) {
      this.products.splice(i, 1);

      break;
    }
  }
}

ProductList.prototype.getLength = ProductList_getLength;

ProductList.prototype.addProduct = ProductList_addProduct;

ProductList.prototype.getTotalPrice = ProductList_getTotalPrice;

ProductList.prototype.removeProduct = ProductList_removeProduct;

module.exports = ProductList;
