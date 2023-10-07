class WeatherDetailsPage {
  locationTitle() {
    return cy.get("h1")
  }

  condition() {
    return cy.get("[aria-label='Conditions']")
  }

  current_Temp() {
    return cy.get("[aria-label='Current temperature']")
  }
  highest_Temp() {
    return cy.get("span[aria-label='Highest expected temperature']")
  }

  lowest_Temp() {
    return cy.get("span[aria-label='Lowest expected temperature']")
  }

  sunrise() {
    return cy.contains('span', 'Sunrise').siblings('span')
  }
  sunset() {
    return cy.contains('span', 'Sunset').siblings('span')
  }
  humidity() {
    return cy.contains('span', 'Humidity').siblings('span')
  }
  visibility() {
    return cy.contains('span', 'Visibility').siblings('span')
  }
}
const weatherDetails = new WeatherDetailsPage();
export default weatherDetails
