/// <reference types="cypress" />

const exp = require("constants")

describe("Backend test", ()=> {
    
    it('test one', () => {
        //cy.visit("https://rsa.unibet.co.uk/api/v1/configuration/client")
        cy.request('https://rsa.unibet.co.uk/api/v1/configuration/client').should((res) =>{
            expect(res.status).equal(200)
            
            // check the response contains the chosen keys
            expect(res.body).to.contain("AdrumAppKey")
            expect(res.body).to.contain("BaseUrl") 
            expect(res.body).to.contain("Provider")
            expect(res.body).to.contain("Version")

            // check Provider key value is equal to UNIBET
            // I do not know how to check the invidiual key for its value
            // I have succeeded on other public apis to check keys for values but I can't get it working on this one and I'm not sure why
            // I have been trying for hours with no success
            // things like : expect(res.body.Provider).to.contain("UNIBET") doesn't work
            // I'm a bit lost, so all I can think of doing to satisfy the requirement is to check if the value is there and we can assume its the value for the key we want
            // It's not a good method I'm sure
            expect(res.body).to.contain("UNIBET")

            // Check url is a website, again, same as above, I could not figure out how to check individual keys for their values
            expect(res.body).to.contain("https://")

            // once again i could not figure out to check an invidual keys value
            // Here i noticed that each letter in the API is an item in an array so I sliced the parts that contained the version number
            // I know the task was to check it wasn't empty, but im not sure how to do that given I can't figure out how to get a keys value
            cy.log(res.body.slice(280, 290))
            expect(res.body.slice(280, 290)).to.contain("2.5.1672")
            



            
            
            
            
            
            
            //expect(res.body.AdrumAppKey).to.equal("EUM-AAB-AUM")
            //expect(res.body.BaseUrl).to.equal("https://rsc.unibet.co.uk/")
            //expect(res.body.Provider).to.equal("UBINET")
            
        })
    })
})
