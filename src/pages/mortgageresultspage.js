class MortgageResultsPage {

    get filterBox() {
        return $('#newMortgageRatesTypeFilter');
    }

    get fixedRateCheckBox() {
        return $('#fixed > label');
    }

    get withFeeCheckBox() {
        return $('#product-fee-fee > label');
    }

    get overLay(){
        return $('#updatingOverlay');
    }

    get results(){
        return $$('.notOnMobile.productHeading ');
    }

    clickOptionForFilterResults() {
        this.filterBox.waitForDisplayed();
        browser.execute(ele => ele.click(), this.fixedRateCheckBox);
        this.overLay.waitForDisplayed();
        this.overLay.waitForDisplayed(undefined, true);
        browser.execute(ele => ele.click(), this.withFeeCheckBox);
        this.overLay.waitForDisplayed();
        this.overLay.waitForDisplayed(undefined, true);
    }

    filteredResults() {
        return this.results.map(value => value.getText().trim());
       
    }


}
export default new MortgageResultsPage();