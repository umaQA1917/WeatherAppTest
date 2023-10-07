class DashboardPage {
  dashboardTitle() {
    return cy.get("h1")
  }

  location(loc) {
    return cy.get('a[aria-label*=' + loc + ']').find("[data-testid='weather-card-location']")
  }
  locationDegree(loc)
  {
    return cy.get('a[aria-label*=' + loc + ']').find("[data-testid='weather-card-temperature']")

  }
 
  backToDashboard()
  {
    return cy.get("a[href='/weather']")
  }

  setting_btn() {
    return cy.get("a[href='/weather/settings']")
  }
  mockLocation(latitude, longitude) {
    return {
      onBeforeLoad(win) {
        cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake((cb, err) => {
          if (latitude && longitude) {
            return cb({ coords: { latitude, longitude } });
          }
          throw err({ code: 1 });
        });
      }
    };
  }
}

const dash = new DashboardPage();
export default dash
