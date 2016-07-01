Feature: Remove Product from List

  Scenario: Remove a product from the list
    Given there are products in the list
      And length is greater or equal than 1
    When I remove a product
    Then the length of the list should decrease in 1