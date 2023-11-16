
/// <reference types="cypress"/>

import loginPage from "../support/pages/LoginPage"
import loginText from "../support/resources/login"
import dashboardPage from "../support/pages/DashboardPage" 
import { loginMethod } from "../support/commands"


describe("login page test cases", ()=>{

it("positive login test case", ()=>{
   loginMethod(loginText.userName, loginText.password)
   cy.contains(dashboardPage.hrmText).should(loginText.beVisible);
})


it("negative login test with invalid username", ()=> {
   loginMethod(loginText.wrongUserName, loginText.password);
   cy.contains(loginText.message).should(loginText.beVisible);
})


it("negative login test with invalid password", ()=>{

   loginMethod(loginText.userName, loginText.wrongPassword)
   cy.contains(loginText.message).should(loginText.beVisible);
})


})


