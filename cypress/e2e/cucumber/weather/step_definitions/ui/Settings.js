/// <reference types="cypress" />
import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import setting from '../../Pages/SettingsPage';

Then(/^Check page title as '(.*)'$/, (title) => {
  setting.settingTitle().should('have.text', title)
});

Then(/^Check '(.*)' heading is present$/, (heading) => {
  setting.loc_Heading().should('have.text', heading)
});

Then(/^Check '(.*)' information is present below locations$/, (para) => {
  setting.loc_Info().should('have.text', para)
});

Then(`Check exisitng selected location as {string} is present`, (location) => {
  setting.existing_Location(location).should('have.text', location)
});

Then(/^Check Add location is present$/, () => {
  setting.add_Location().should('exist')
});


Then(/^Check '(.*)' heading for location is present$/, (heading) => {
  setting.units_Heading().should('have.text', heading)
});

Then(/^Check '(.*)' information is present below units$/, (para) => {
  setting.units_Info().should('have.text', para)
});

Then(/^Check '(.*)' unit is selected defaulty$/, (units) => {
  setting.units_Sel(units).should('have.text', units)
});

Then(/^Able to select '(.*)' unit$/, (units) => {
  setting.units_Sel(units).should('have.text', units)
  setting.units_Sel(units).click()
});


Then(`Enter the location name as {string}`, (location) => {
      //handling prompt alert
      cy.window().then(function(p){
        //stubbing prompt window
        cy.stub(p, "prompt").returns(location);
        setting.add_Location().click()
        
      });
});



Then(`Click on remove {string} location`, (loc) => {
  setting.loc_Remove(loc).click()
});

Then(`Check exisitng selected location as {string} is not present`, (location) => {
  setting.existing_Location(location).should('not.exist')
});
