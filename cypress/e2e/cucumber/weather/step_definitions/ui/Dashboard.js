import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import dash from '../../Pages/DashboardPage';

const location = ['Oslo', 'Berlin', 'Porto']
const latitude=[35.172744,52.090098,12]
const longtitude =[137.0580,13.432944,13]
const units = 'Metric'


// Register a before hook to run code before the test starts
Before(() => {
  cy.interceptWeatherAPI(location,latitude,longtitude,units);
});


Given(`Launch the weather dashboard page`, () => {
  cy.visit('/', dash.mockLocation(35.172744, 137.05802));
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


