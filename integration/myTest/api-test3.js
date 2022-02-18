describe("Backend test", ()=> {
    
    it('test one', () => {
        cy.request({
            method: 'GET',
            url: 'https://rsa.unibet.co.uk/api/graphql/config/gb'
            
        }).should((res) =>{
            expect(res.status).equal(200)
            // should be log false
            cy.log(res.body.config.settings.carousel.showBetType)
            expect(res.body.config.settings.carousel.showBetType).eq(false)
            // should also log false
            cy.log(res.body.config.settings.carousel.showEventType)
            expect(res.body.config.settings.carousel.showEventType).eq(false)

            // check blockedJurisdictionPerCountry exists
            expect(res.body.blockedJurisdictionPerCountry).exist

            // check sortCountriesByList
            expect(res.body.config.settings.lobby.sortCountriesByList).exist

            // check the splash page key exists
            expect(res.body.config.settings.splashPage).exist

            // check the enable desktop key exists
            expect(res.body.uiConfiguration.MarketingWidget.enableDesktop).exist

            // check that carouselLimit is greater than 3
            // There must be a better way to complish this
            expect(res.body.config.settings.carousel.carouselLimit).above(3, 4, '4 is greater than 3')

            // Check twitter user key
            expect(res.body.config.settings.app.twitterUser).equal("UnibetRacing")

            //check splash page background
            expect(res.body.config.settings.splashPage.background).eq("https://content.unibet.co.uk/p/bg-image.jpg")

            //check showTimeToJumpOnMobile
            expect(res.body.config.settings.lobby.showTimeToJumpOnMobile).equal(true)
            //expect(res.body.config.settings.lobby.showTimeToJumpOnMobile).isNotNull(true, "is not null")

            

            

            
            
            
            
        
        })
    })
})