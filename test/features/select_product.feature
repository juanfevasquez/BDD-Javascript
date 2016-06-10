Feature:  Select product

  Scenario: Update product list size
    Given an order with 0 products
    When the user selects a product
    Then the order product's quantity will be 1

  Scenario: Update order total price according to product
    Given the next product table:
      | Product  |   price  |
      | a        |   10     |
      | b        |   20     |
      | c        |   30     |
    When the user selects the product a
     And the product b
    Then the total price will be 30
