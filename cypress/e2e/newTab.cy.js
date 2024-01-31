describe("Automating new tab",()=>{
    before(()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        Cypress.on("uncaught:exception",()=>{
            return false
        })
    })
    it.skip("this action will open a new tab",()=>{
        cy.get(".example > a").click()
    })
    it.only("this action will not open up a new tab",()=>{
        cy.get(".example > a").invoke("removeAttr","target").click()
    })
})