// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const baseUrl = Cypress.env('ApiBaseUrl');
const apiKey = Cypress.env('YOUR_API_KEY');
const location = ['Oslo', 'Berlin', 'Porto']
const latitude = [35.172744, 52.090098, 13.432944]
const longtitude = [137.05802, 13.432944, 13]
const units = 'Metric'
Cypress.Commands.add('interceptWeatherAPI', () => {
  cy.intercepcurrentLocationAPI(location[0], latitude[0], longtitude[0], units)
  cy.interceptWeatherDetailsAPI(location[1], latitude[1], longtitude[1], units);
  cy.interceptWeatherDetailsAPI(location[2], latitude[2], longtitude[2], units);
});


Cypress.Commands.add('weatherAlias', () => {
  cy.wait('@' + location[0] + 'data')
  cy.wait('@' + location[1] + 'latlon')
  cy.wait('@' + location[1] + 'data')
  cy.wait('@' + location[2] + 'latlon')
  cy.wait('@' + location[2] + 'data')

});

Cypress.Commands.add('intercepcurrentLocationAPI', (location, curLati, curLong) => {
  // Intercept the weather API request and alias it
  cy.intercept(
    'GET',
    `${baseUrl}/data/2.5/weather?lat=${curLati}&lon=${curLong}&units=${units}&appid=${apiKey}`,
    { fixture: location + '.json' }
  ).as(location + 'data');
})

Cypress.Commands.add('interceptWeatherDetailsAPI', (location, latitude, longtitude, unit) => {
  cy.intercept(
    'GET',
    `${baseUrl}/geo/1.0/direct?q=${location}&limit=1&units=:units&appid=${apiKey}`,

    (req) => {
      req.reply({
        statusCode: 200,
        body: [
          {
            name: location,
            lat: latitude,
            lon: longtitude,
          },
        ],
      });
    }
  ).as(location + 'latlon')

  cy.intercept(
    'GET',
    `${baseUrl}/data/2.5/weather?lat=${latitude}&lon=${longtitude}&units=${unit}&appid=${apiKey}`,
    { fixture: location + '.json' }
  ).as(location + 'data');


})
Cypress.Commands.add('weatherDetailsAlias', (location) => {
  cy.wait('@' + location + 'latlon')
  cy.wait('@' + location + 'data')

});