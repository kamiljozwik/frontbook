/// <reference types="Cypress" />

describe('landing page', () => {
  it('can visit pages for all auto-generated categories', () => {
    cy.visit('/js/');
    cy.visit('/css/');
    cy.visit('/jam/');
    cy.visit('/frontops/');
    cy.visit('/seo/');
    cy.visit('/monitor/');
    cy.visit('/ux/');
    cy.visit('/utils/');
  });
});
