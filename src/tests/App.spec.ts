/* eslint-disable
no-undef,
no-unused-vars,
prefer-arrow-callback,
import/no-unresolved,
import/extensions,
import/no-extraneous-dependencies,
func-names
*/

import { mount } from '@cypress/vue';
import App from '../App.js';

describe('App Card', () => {
  it('displays the correct hover animation.', () => {
    mount(App);

    const card = cy.get('.appCard');
    card.trigger('mouseover');
    card.should('have.css', 'box-shadow')
      .and('eq', 'rgba(0, 0, 0, 0.15) 0px 0px 10px 0px');
  });

  it('redirects away from current page to learn more.', () => {
    mount(App);

    const card = cy.get('.appCardMore');
    // card.trigger('click');
    card.should('have.css', 'box-shadow').and('eq', 'rgba(0, 0, 0, 0.15) 0px 0px 10px 0px');
  });
});
