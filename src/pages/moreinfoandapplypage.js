class MoreInfoAndApplyPage {

    get moreInfoAndApplyLink() {
        return $('._5yr .toggleMoreDetails.desktop');
    }

    get applyMortgageButton() {
        return $('._5yr .applyButton.doNotPrint')
    }

    moreInfoAndApplyMortgage() {
        this.moreInfoAndApplyLink.click();
        this.applyMortgageButton.click();
    }

}

export default new MoreInfoAndApplyPage();