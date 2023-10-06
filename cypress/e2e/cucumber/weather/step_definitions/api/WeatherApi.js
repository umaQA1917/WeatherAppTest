/// <reference types="Cypress" />

const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');
let locationData
Given('I have a location {string}', (location) => {
  // Store the location for later use in the API request
  cy.wrap(location).as('currentLocation');
});

And(/^I have units (.*)$/, (units) => {
  // Store the units for later use in the API request
  cy.wrap(units).as('currentUnits');
});


And(/^I have an API key (.*)$/, (apiKey) => {
  // Store the API key for later use in the API request
  cy.wrap(apiKey).as('currentApiKey');
});

When('I fetch the location details', function () {
  // Get the location from the previous step
  cy.get('@currentLocation').then((location) => {
    // Construct the location API URL
    const locationApiUrl = Cypress.env('ApiBaseUrl') + "/geo/1.0/direct?q=${location}&limit=1&appid=" + Cypress.env('YOUR_API_KEY');
    // Send a GET request to fetch location data
    cy.request({
      method: 'GET',
      url: locationApiUrl,
    }).as('locationResponse');
  });
});

Then('The response should include latitude and longitude', function () {
  // Get the location response from the previous step
  cy.get('@locationResponse').then((locationResponse) => {
    // Validate the location API response
    expect(locationResponse.status).to.equal(200);
    expect(locationResponse.body).to.have.lengthOf(1);
    locationData = locationResponse.body[0];
    expect(locationData).to.have.property('lat');
    expect(locationData).to.have.property('lon');
  });
});

When('I fetch the weather details using the location and units', function () {
  cy.get('@currentLocation').then((location) => {
    cy.get('@currentUnits').then((units) => {
      // Ensure the location and units are valid
      expect(location).to.be.a('string');
      // Construct the weather API URL using the location, units, and your API key
      if (location === 'InvalidLocation' || units === 'InvalidUnits') {
        // Simulate a negative scenario by sending a request with invalid location or units

        const weatherApiUrl = Cypress.env('ApiBaseUrl') + "/data/2.5/weather?lat=q=${location}& &units=${units}&appid=" + Cypress.env('YOUR_API_KEY');
        // Send a GET request to fetch weather data
        cy.request({
          method: 'GET',
          url: weatherApiUrl,
          failOnStatusCode: false, // Allow the request to fail
        }).as('weatherResponse');
      } else {
        // Construct the valid weather API URL
        const weatherApiUrl = Cypress.env('ApiBaseUrl') + "/data/2.5/weather?lat=" + locationData.lat + "&lon=" + locationData.lon + "&units=${units}&appid=" + Cypress.env('YOUR_API_KEY');
        // Send a GET request to fetch weather data
        cy.request({
          method: 'GET',
          url: weatherApiUrl,
        }).as('weatherResponse');
      }
    });
  });
});

// Handle API key validation in the request
When('I fetch the weather details using the location, units, and API key', function () {
  // Get the location, units, and API key from the previous steps
  cy.get('@currentLocation').then((location) => {
    cy.get('@currentUnits').then((units) => {
      cy.get('@currentApiKey').then((apiKey) => {

        // Construct the location API URL
        const locationApiUrl = Cypress.env('ApiBaseUrl') + "/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}";
        // Send a GET request to fetch location data
        cy.request({
          method: 'GET',
          url: locationApiUrl,
          failOnStatusCode: false, // Allow the request to fail
        }).as('locationResponse')
        cy.get('@locationResponse').then((locationResponse) => {
          expect(locationResponse.status).to.equal(401);
        })
        // Construct the weather API URL using the location, units, and API key
        const weatherApiUrl = Cypress.env('ApiBaseUrl') + "/data/2.5/weather?lat=" + locationData.lat + "&lon=" + locationData.lon + "&units=${units}&appid=${apiKey}";
        // Send a GET request to fetch weather data
        cy.request({
          method: 'GET',
          url: weatherApiUrl,
          failOnStatusCode: false, // Allow the request to fail
        }).as('weatherResponse');
        cy.get('@weatherResponse').then((weatherResponse) => {
          expect(weatherResponse.status).to.equal(401);
        })

      });
    });
  });
});

Then('The response should include temperature, sunrise, sunset,Humidity and Visibility', function () {
  // Get the weather response from the previous step
  cy.get('@weatherResponse').then((weatherResponse) => {
    // Validate the weather API response
    expect(weatherResponse.status).to.equal(200);

    // Validate specific properties in the response body
    expect(weatherResponse.body.weather[0]).to.have.property('main');
    expect(weatherResponse.body).to.have.property('main');
    expect(weatherResponse.body.main).to.have.property('temp').that.is.a('number');
    expect(weatherResponse.body.main).to.have.property('temp_min').that.is.a('number');
    expect(weatherResponse.body.main).to.have.property('temp_max').that.is.a('number');
    expect(weatherResponse.body.main).to.have.property('humidity').that.is.a('number');
    expect(weatherResponse.body).to.have.property('visibility');
    expect(weatherResponse.body.sys).to.have.property('sunrise').that.is.a('number');
    expect(weatherResponse.body.sys).to.have.property('sunset').that.is.a('number');


  });
});
