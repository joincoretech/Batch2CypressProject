/// <reference types="cypress"/>

describe("login page test cases", ()=>{

it("positive login test case", ()=>{
   cy.visit("https://dreamhiringacademy.com/");
   cy.get("input[name='name']").type("admin@gmail.com");
   cy.get("input#Psw").type("admin#123");
   cy.contains("Sign In").click();
   cy.contains("HRM").should("be.visible");
})



})


