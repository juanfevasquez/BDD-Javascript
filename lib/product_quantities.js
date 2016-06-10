function ProductQuantities() {
  this.product = [
    {
      product: "a",
      quantity: 1
    },
    {
      product: "b",
      quantity: 1
    },
    {
      product: "c",
      quantity: 1
    }
  ];
}

function ProductQuantities_getCurrentQuantity() {
  return this.product[0].quantity;
}

ProductQuantities.prototype.getCurrentQuantity = ProductQuantities_getCurrentQuantity;

module.exports = ProductQuantities;