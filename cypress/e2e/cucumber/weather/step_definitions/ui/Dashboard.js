import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import dash from '../../Pages/DashboardPage';




// Register a before hook to run code before the test starts
Before(() => {
  cy.interceptWeatherAPI();
  

});


Given(`Launch the weather dashboard page`, () => {
  cy.visit('/', dash.mockLocation(35.172744, 137.05802));
  cy.weatherAlias()
 
});

Then(`Verify dashboard tile as {string}`, (title) => {
  dash.dashboardTitle().contains(title).should('have.text', title)
});

Then(`Verify current location as {string}`, (location) => {
  dash.location(location).should('have.text', location)
});

Then(`Verify current location {string} temperature as {string}`, (location, degree) => {
  dash.locationDegree(location).should('have.text', degree)
});


Then(`Verify default location as {string}`, (location) => {
  dash.location(location).should('have.text', location)
});

Then(`Verify default location {string} temperature as {string}`, (location, degree) => {
  dash.locationDegree(location).should('have.text', degree)
});


Given(/^Click on settings$/, (  ) =>{
 dash.setting_btn().click()
} );


Then(/^Click on Back to Dashboard$/, (  ) =>{
  dash.backToDashboard().click()
} );


Then(`Verify {string} is present in dashboard`, (location) => {
  dash.location(location).should('exist')
});


