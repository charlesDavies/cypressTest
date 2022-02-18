describe("Backend test", ()=> {
    
    it('test one', () => {
        cy.request({
            method: 'GET',
            url: 'https://rsa.unibet.co.uk/api/graphql/config/gb'
            
        }).should((res) =>{
            expect(res.status).equal(200)
            expect(res.body.EnableCarousel).eq("true")
            cy.log(res.body.showText)

            // expect(res.body).to.contain("blockedJurisdictionPerCountry")
            // expect(res.body).to.contain("sortCountriesByList") 
            // expect(res.body).to.contain("spashPage")
            // expect(res.body).to.contain("enableDesktop")

            
            
            
            
        
        })
    })
})