import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import weatherDetails from '../../Pages/WeatherDetailsPage';
import dash from '../../Pages/DashboardPage';

const Lati = 52.090098
const Long = 13.432944

Given(`Click on current location as {string} with {string} unit`, (location, unit) => {
  cy.interceptWeatherDetailsAPI(location, Lati, Long, unit);
  dash.location(location).click({ timeout: 8000 })
  cy.weatherDetailsAlias(location)
});


Then(`Check weather details location title as {string}`, (location) => {
  weatherDetails.locationTitle().should('have.text', location)
});

Then(`Check weather details location title as {string}`, (location) => {
  weatherDetails.locationTitle().should('have.text', location)
});


Then(`Check weather condtion as {string}`, (condition) => {
  weatherDetails.condition().should('have.text', condition)
});

Then(`Check temprature as {string}`, (temp) => {
  weatherDetails.current_Temp().should('have.text', temp)
});

Then(`Check highest expected temperature {string}`, (high) => {
  weatherDetails.highest_Temp().should('have.text', high)
});

Then(`Check lowest expected temperature {string}`, (low) => {
  weatherDetails.lowest_Temp().should('have.text', low)
});

Then(`Check Sunrise at {string}`, (rise) => {
  weatherDetails.sunrise().should('have.text', rise)
});

Then(`Check Sunset at {string}`, (set) => {
  weatherDetails.sunset().should('have.text', set)
});

Then(`Check Humidity level in air {string}`, (humidity) => {
  weatherDetails.humidity().should('have.text', humidity)
});

Then(`Check Visibility level in air {string}`, (visibility) => {
  weatherDetails.visibility().should('have.text', visibility)
});

