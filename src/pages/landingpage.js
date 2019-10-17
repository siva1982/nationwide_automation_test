class LandingPage {

    get hoverOnMenu() {
        return $('#MortgagesNavItem');
    }

    get newRateOption() {
        return $('*=Mortgage rates');
    }

    open(url) {
        browser.maximizeWindow();
        browser.url(url);
    }

    hoverOnNavItem() {
        this.hoverOnMenu.waitForDisplayed();
        this.hoverOnMenu.moveTo();
        this.newRateOption.waitForDisplayed();
        this.newRateOption.click();
    }

}
export default new LandingPage();