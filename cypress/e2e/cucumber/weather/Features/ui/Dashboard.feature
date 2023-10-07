Feature: Mock Current Location Data and validate the Dashboard
    Background:
        Given Launch the weather dashboard page
    #TC01-Verify current location with temperature in celcius is appeared in dashboard   
    Scenario: Verify current location with temperature in celcius is appeared in dashboard
        Then Verify dashboard tile as 'Dashboard'
        Then Verify current location as "Oslo"
        Then Verify current location 'Oslo' temperature as '14 °C'
    #TC02-Verify default location(Berlin and Porto) with temperature in celceius is appeared in dashboard
    Scenario: Verify default location(Berlin and Porto) with temperature in celceius is appeared in dashboard
        Then Verify default location as "Berlin"
        Then Verify default location 'Berlin' temperature as '11 °C'
        Then Verify default location as "Porto"
        Then Verify default location 'Porto' temperature as '27 °C'

        