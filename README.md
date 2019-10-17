Webdriver.io + CucumberJS automation test
====================

Implement the Feature file "src/features/find-mortgage-rate.feature" according to the following:

- Navitage to https://nationwide.co.uk
- Using the Menu navigatge to "Mortgages" > "New mortgage customer: Mortgage rates"
- Find mortgage rate for the following case:
  - Nationwide mortgage = No
  - Type of mortgage = Changing lender
  - Property value = £300,000
  - Mortgage amount = £150,000
  - Term = 30 years
- Filter the results:
  - Mortgage type = Fixed
  - Product fee = With Fee
- Then check the results return the following products:
  - 2 yr Fixed
  - 3 yr Fixed
  - 5 yr Fixed
  - 10 yr Fixed
- Click "More info and apply" and "Apply" button for the "5 yr Fixed" product
- Verify the next page's heading is "Start your remortgage application"

Steps to execute test

1) git clone 
2) run npm install
3) run testnreport // This will run the test and opens the Allure report in chorme browser

