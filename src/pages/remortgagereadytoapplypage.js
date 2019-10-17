class RemortGageReadyToApplyPage{
   
    getHeading(){
        return $('section.contentSection.smallMargin > h1').getText();
    }
}

export default new RemortGageReadyToApplyPage();