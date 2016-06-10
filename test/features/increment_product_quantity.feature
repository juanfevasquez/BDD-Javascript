Feature:  Increment Product's Quantities

  Scenario: Increase a product's quantity
    Given an order has a product with quantity of 1
    When the user increments this product's quantity
    Then this product's quantity will be 2
