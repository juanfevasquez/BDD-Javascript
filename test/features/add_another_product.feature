Feature: Add Another Product

  Scenario: The user adds another product
    Given there is at least 1 product selected
    When the user adds a new product
    Then product list length should be at least 2

  Scenario: Total price is updated when a new product is added
    Given there are the next products selected
      | Product    |  Price  |
      | Hamburger  |  100    |
    When the user adds a new product with name "nacho" and price 200
    Then total price will be 300