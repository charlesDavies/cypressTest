describe("Backend test", ()=> {
    
    it('test one', () => {
        //cy.visit("https://www.unibet.co.uk/racing#/lobby/all")
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users'
            
        }).should((res) =>{
            expect(res.status).equal(200)
            //expect(res.body[0].id).equal(2859)
            cy.log(res.body[1].id)
            //expect(res.body[2].name).equal("Annapurna Pilla")
            //expect(res.body[4].email).equal("nayar_mr_ambar@beier.co")
            //expect(res.body[5].gender).equal("male")
            //expect(res.body[6].status).equal("active")
            
            
            
        
        })
    })
})