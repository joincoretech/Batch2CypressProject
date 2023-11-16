/// <reference types="cypress"/>

import { loginMethod } from "../support/commands"
import loginText from "../support/resources/login"
import dashboardPage from "../support/pages/DashboardPage"

describe("dashboard page test cases", ()=>{

beforeEach("login method", ()=>{
    loginMethod(loginText.userName, loginText.password)
})

    it ("validate the employee card is visible", ()=>{
     cy.contains(dashboardPage.emplyee).should("exist");
})


})