describe("automate iframe",()=>{
    before(()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        Cypress.on("uncaught:exception",()=>{
            return false
        })
    })

    it("can write on iframe field",()=>{
        cy.get("#mce_0_ifr").then(($iframe)=>{
            let iframebody = $iframe.contents().find("body")
            cy.wrap(iframebody).clear().type("my name is armstrong")
        })
    })
    it.skip("can write on iframe field",()=>{
        cy.get("#mce_0_ifr").type("hello there ")
            
    })
})