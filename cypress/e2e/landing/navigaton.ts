/// <reference types="Cypress" />
/// <reference types="../../support" />

describe('landing page navigation', () => {
  it('can navigate between categories', () => {
    cy.visit('/')
      .findCategoryLink('js')
      .findCategoryLink('css')
      .findCategoryLink('jam')
      .findCategoryLink('frontops')
      .findCategoryLink('seo')
      .findCategoryLink('monitor')
      .findCategoryLink('ux')
      .findCategoryLink('utils');
  });
});
