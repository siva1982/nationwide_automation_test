class OurMortgageRatesPage {

    get noButtonForNationWideMortgage() {
        return $('#selectorItemHaveNationwideMortgage1');
    }

    get selectChangingMyLenderOption() {
        return $('#selectorItemNationwideMortgageTypeNo2');
    }

    get propertyValueFieldSelector() {
        return $('#SearchPropertyValue');
    }

    get mortgageAmountFieldSelector() {
        return $('#SearchMortgageAmount');
    }

    get termFieldSelector() {
        return $('#SearchMortgageTerm');
    }

    get mortgageRateButton() {
        return $('#myButton');
    }

    clickOnNewCustomerChangingMortgageOptions() {
        this.noButtonForNationWideMortgage.click();
        this.selectChangingMyLenderOption.click();
    }

    enterTheDetailsToValueYourHome(propertyValue, mortgageAmount, mortgageDuration) {
        this.propertyValueFieldSelector.setValue(propertyValue);
        this.mortgageAmountFieldSelector.setValue(mortgageAmount);
        this.termFieldSelector.setValue(mortgageDuration);
        browser.pause(2000);
    }

    clickOnMortgageButton() {
        this.mortgageRateButton.click();
    }

}

export default new OurMortgageRatesPage();