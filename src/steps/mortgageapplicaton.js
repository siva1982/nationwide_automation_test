import { Given, When, Then } from 'cucumber';
import chai, { expect } from 'chai';
import LandingPage from '../pages/landingpage';
import OurMortgageRatesPage from '../pages/ourmortgageratespage';
import MortgageResultsPage from '../pages/mortgageresultspage';
import MoreInfoAndApplyPage from '../pages/moreinfoandapplypage';
import RemortgageReadyToApplyPage from '../pages/remortgagereadytoapplypage';

Given(/^I open the url "([^"]*)"$/, function (url) {
    LandingPage.open(url);
  });

  When(/^I navigate to "([^"]*)" via "([^"]*)"$/, function (secondaryNavItem, navItem) {
    LandingPage.hoverOnNavItem();
  });

  When(/^I click on the following (?:button|buttons):$/, function (table) {
        var data = table.raw();
        return data.map(function (val) {
        OurMortgageRatesPage.clickOnNewCustomerChangingMortgageOptions();
        });
  });

  When(/^I enter the values for the current property as (.*),(.*),(.*)$/, (propetyValue, mortgageValue, loanDuration) => {
    OurMortgageRatesPage.enterTheDetailsToValueYourHome(propetyValue, mortgageValue, loanDuration);
  });

  When(/^I click Find a Mortgage Rate button$/, function(){
     OurMortgageRatesPage.clickOnMortgageButton();
  });

  When(/^I select the Mortgage Type and Product Fee to filter the results$/,function(){
     MortgageResultsPage.clickOptionForFilterResults();
  });

  Then(/^I check for the results (.*), (.*), (.*), (.*)$/,(TwoyrFixed,ThreeyrFixed,FiveyrFixed,TenyrFixed)=>{
     var results = MortgageResultsPage.filteredResults();
     expect(results).to.eql([TwoyrFixed, ThreeyrFixed, FiveyrFixed, TenyrFixed]);
  });

  Then(/^I click mortgage for 5 yrs fixed option$/,function(){
     MoreInfoAndApplyPage.moreInfoAndApplyMortgage();
  });

  Then(/^I should see the heading of the application is Start your Remortgage application$/,function(){
      var heading = RemortgageReadyToApplyPage.getHeading();
      expect(heading).to.eql('Start your Remortgage application');
  });
