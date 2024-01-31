var el
describe("Upload document",()=>{
    before(()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.fixture("uploadElements").then((sel)=>{
            el = sel
        })
        Cypress.on("uncaught:exception",()=>{
            return false
        })
    })

    it("user can upload document",()=>{
        cy.xpath("/html/body/div[2]/div/div[1]/form/input[1]").attachFile("testify.png")
        cy.get(el.uploadButton).click()
    })
})