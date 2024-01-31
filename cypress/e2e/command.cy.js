let el
describe("creating custom login commands",()=>{
    before(()=>{
        cy.fixture("command").then((sel)=>{
            el = sel
        })
        cy.visit("/")
        Cypress.on("uncaught:exception",()=>{
            return false 
        })
    })
    it.skip("user can login successfully",()=>{
        //cy.login()
        cy.login2(el.username,el.password)
    })
    it("user can login using reusable functions",()=>{
        cy.tyAssert("command",el.usernameField,el.username)
        cy.tyAssert('command',el.passwordField,el.password)
        cy.pressDown("command",el.loginButton)
    })
    it("complete shopping",()=>{
        cy.get(":nth-child(1) > .pricebar > .btn_primary").click()
        cy.get(".fa-layers-counter").click()
    })
    
})