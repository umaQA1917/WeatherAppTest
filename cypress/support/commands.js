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
const location = ['Oslo','Berlin', 'Porto']
const curLati = 35.172744
const curLong = 137.05802
const berlinLati = 52.090098
const berlinLong = 13.432944
const PortLati = 12
const PortLong = 13
const units='Metric'
Cypress.Commands.add('interceptWeatherAPI', () => {
 
    // Intercept the weather API request and alias it
    cy.intercept(
      'GET',
      `${baseUrl}/data/2.5/weather?lat=${curLati}&lon=${curLong}&units=${units}&appid=${apiKey}`,
      { fixture: location[0]+'.json' }
    ).as(location[0]+'data');
    cy.intercept(
      'GET',
      `${baseUrl}/geo/1.0/direct?q=${location[1]}&limit=1&units=:units&appid=${apiKey}`,
     
      (req) => {
        req.reply({
          statusCode: 200,
          body: [
            {
              name: location[1],
              lat: berlinLati,
              lon: berlinLong,
            },
          ],
        });
      }
    ).as(location[1]+'latlon')
    
    cy.intercept(
      'GET',
      `${baseUrl}/data/2.5/weather?lat=${berlinLati}&lon=${berlinLong}&units=${units}&appid=${apiKey}`,
      { fixture: location[1]+'.json' }
    ).as(location[1]+'data');

    cy.intercept(
      'GET',
      `${baseUrl}/geo/1.0/direct?q=${location[2]}&limit=1&units=:units&appid=${apiKey}`,
      (req) => {
        req.reply({
          statusCode: 200,
          body: [
            {
              name: location[2],
              lat: PortLati,
              lon: PortLong,
            },
          ],
        });
      }
    ).as(location[2]+'latlon')
    cy.intercept(
      'GET',
      `${baseUrl}/data/2.5/weather?lat=${PortLati}&lon=${PortLong}&units=${units}&appid=${apiKey}`,
      { fixture: location[2]+'.json' }
    ).as(location[2]+'data');
  
  });


  Cypress.Commands.add('weatherAlias', () => {
   cy.wait('@' + location[0] + 'data')
   cy.wait('@' + location[1] + 'latlon')
   cy.wait('@' + location[1] + 'data')
   cy.wait('@' + location[2] + 'latlon')
   cy.wait('@' + location[2] + 'data')
    
  });
 