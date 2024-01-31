//import { selectors } from "../fixtures/elements"
var el
describe('LOGIN SUCCESSFULLY', () => {
before(()=>{
  Cypress.on("uncaught:exception",()=>{
    return false
  })
  cy.visit('/')
  cy.fixture("locators").then((sel)=>{
    el = sel
  })
})

  it.only("login as a lockedout user",()=>{
    
      cy.xpath(el.usernameField).fill(el.username2)
      cy.get(el.passwordField).fill(el.password)
      //cy.get(el.loginButton).click()
      cy.findByText("LOGIN").click()

  })
  it.only("login as a problem user ",()=>{
    
      cy.xpath(el.usernameField).clear().fill("problem_user")
      cy.get(el.passwordField).clear().fill("secret_sauce")
      //cy.get(el.loginButton).click().wait(2000)
      cy.findByText("LOGIN").click()
      cy.get(el.burgerButton).click()
      cy.get(el.logOutButton).click()
    

  })
  it("login as a performance glitch user ",()=>{

      cy.get(el.usernameField).clear().fill(el.username4)
      cy.get(el.passwordField).clear().fill(el.password)
      //cy.get(el.loginButton).click()
      cy.findByText("LOGIN").click()
      cy.get(el.burgerButton).click()
      //cy.get(el.logOutButton).click()
      cy.findByText("Logout").click()
      

  })
  it("login as a standard user ",()=>{

      cy.get(el.usernameField).clear().fill(el.username1)
      cy.get(el.passwordField).clear().fill(el.password)
      //cy.get(el.loginButton).click()
      cy.findByText("LOGIN").click()

  })

})