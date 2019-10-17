Feature: Find a mortgage rate
  As a new customer
  I want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide

  @WIP
  Scenario: Find re-mortgage rates
    Given I open the url "https://www.nationwide.co.uk"
    And I navigate to "mortgage rates" via "mortgages"
    When I click on the following buttons:
      | No existing mortgage  |
      | Im changing my lender |
    And I enter the values for the current property as 300000,150000,30
    And I click Find a Mortgage Rate button
    And I select the Mortgage Type and Product Fee to filter the results
    Then I check for the results 2 yr Fixed, 3 yr Fixed, 5 yr Fixed, 10 yr Fixed
    And I click mortgage for 5 yrs fixed option
    Then I should see the heading of the application is Start your Remortgage application


