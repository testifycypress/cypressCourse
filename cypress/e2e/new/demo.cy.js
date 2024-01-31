var el
describe("Automate demo easy", () => {
    before(() => {
        cy.visit("https://demo.seleniumeasy.com/")
        //cy.visit("/")
        cy.fixture("demoElements").then((sel) => {
            el = sel
        })
    })
    it("user can view web page image", () => {
        cy.get(el.siteImage).should("be.visible")
    })
    it("user can click on input forms drop down button", () => {
        cy.get(el.inputFormsDropDownButton).click()
    })
    it("user can view simple form demo button and click on it", () => {
        cy.get(el.simpleFormDemoButton).should("be.visible").click()
    })
    it("user can type on the message field", () => {
        cy.get(el.messageField).type(el.message)
    })
    it("user can click on show message button to view message", () => {
        cy.get(el.showMessage).click()
    })
    it("user can input on value A field", () => {
        cy.get(el.value1Field).scrollIntoView().fill(3)
    })
    it("user can input on value B field", () => {
        cy.get(el.value2Field).scrollIntoView().fill(3)
    })
    it("user can click on get total button", () => {
        cy.get(el.getTotalButton).click()
    })
})

