/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Find link to category page on landing page
     * @example
     * cy.findCategoryLink('js')
     */
    findCategoryLink(category: string): Chainable<any>;
  }
}
