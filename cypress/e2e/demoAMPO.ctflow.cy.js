
		/// <reference types="cypress" />

		context('Generated By Ctflow', () => {
      it('Demo CtFlow 0', () => {
            
      cy.visit('https://ampo.vn')
    

      cy.get('[data-test="search-bar"]').click()
    

    cy.get('[data-test="search-bar"]').type('LED')
    

          }),it('Demo CtFlow 1', () => {
            
      cy.visit('https://ampo.vn')
    

      cy.get('[data-test="login-btn"] > span').click()
    

    cy.get('#phoneNumber').type('09123123123123')
    

    cy.get('#password').type('123123')
    

          }),it('Demo CtFlow 2', () => {
            
      cy.visit('https://ampo.vn')
    

      cy.get('[data-test="login-btn"] > span').click()
    

    cy.get('#phoneNumber').type('09123123123123')
    

    cy.get('#password').type('234234')
    

          }),it('Demo CtFlow 3', () => {
            
      cy.visit('https://ampo.vn')
    

      cy.get('[data-test="login-btn"] > span').click()
    

    cy.get('#phoneNumber').type('0111111111111')
    

    cy.get('#password').type('hahaha')
    

          })
		})
		