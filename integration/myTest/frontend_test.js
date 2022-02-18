/// <reference types="cypress" />

describe("Empty test", ()=> {
    
    it('test one', () => {
        cy.visit('https://www.unibet.co.uk/registration')

        // Clicks the Cookie pop up
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()
        //cy.contains("Allow all cookies").click()

        // Check the form/forms are visible
        cy.get("form").should("be.visible")

        // Get the H2 that says Register with us
        cy.get("h2").contains("Register with us")

        // Check the name field is visible and fill it in
        cy.get("#firstName").should("be.visible")
        cy.get("#firstName").type("Jimmy")

        // Check the surname field is visible and fill it in
        cy.get("#lastName").should("be.visible")
        cy.get("#lastName").type("Johnny")

        // Check the email field is visible and fill it in
        cy.get("#email").should("be.visible")
        cy.get("#email").type("jimmyjohnny@gmail.com")

        // Check that Date of Birth drop downs are visible and fill them in
        cy.get("select[name=day]").should("be.visible")
        cy.get("select[name=day]").select('24')

        cy.get("select[name=month]").should("be.visible")
        cy.get("select[name=month]").select('09')

        cy.get("select[name=year]").should("be.visible")
        cy.get("select[name=year]").select('1997')

        // Check gender selection is visible and choose
        // COME BACK TO THIS LATER - ITS NOT GOOD ENOUGH/CORRECT
        //cy.get("label[name=gender]").contains("Gender")
        cy.get('.custom-radio').should("be.visible")
        cy.get('[type="radio"]').check("1", {force : true})
        //cy.get('[type="radio"]').check("2", {force : true})

        // Continue Button is Visible
        cy.get("button[name=continue-registration").should("be.visible")
        // Click the button 
        cy.contains("Continue").click()

        //I'm aware the method above is not the best - as many things could contain continue
        //However, I tried code such as code below and couldn't get it to work
        //cy.get("button[name=continue-registration]").click()

        // Check the title is visible and contains the name jimmy, the name we used
        // there is probably a much more dynamic way to do this
        //cy.get(".form-view-heading").should("have.text", "Hi Jimmy, great having you with us!")
        cy.contains('h3', 'Hi Jimmy, great having you with us!').should("be.visible");
        
        // Check the Country Code selector is visible and add a code
        cy.get("#address-lookup").should("be.visible")
        cy.contains("Enter manually").click()
        cy.get("input[name=street]").type("45 Glacis Road")
        cy.get("input[name=postalCode]").type("GX11 1AA")
        cy.get("input[name=city]").type("Gibraltar")
        //cy.get("#address-lookup").type("Royal Mail, Aldershot Delivery Office, 48 Station Road Aldershot, GU11 1AA")
        

        cy.contains("strong", "United Kingdom")

        // Click on the country selector and choose gibraltar
        cy.get("div.selected-country-prefix").click()
        cy.get("div.country-selector").should("be.visible")
        cy.get("input[name=search]").type("Gibraltar{enter}")
        cy.get("[tabindex=45]").click()
          
        // Check mobile number field is visible
        cy.get('input[name=phoneNumber]').should("be.visible")
        // Add incorrect number
        cy.get('input[name=phoneNumber]').type("---45-6-45{enter}")
        cy.contains("Continue").click({force : true})
        // check for error message
        cy.contains(".message-container", "Your mobile number is not valid. Please check you’ve entered all the digits that appear after the country code. Spaces are not allowed.").should("be.visible")
        
        //check button is not clickable
        cy.contains("Continue").should("not.be.visible")

    })

    


})
