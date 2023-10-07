# WEATHER APLLICATION TEST SUITE
## ABOUT APPLICATION
Weather Forecasting Application
- Dashboard
- Weather Details
- Settings

# FRAMEWORK Details
 -Cypress with cucumber
 -Mochasome Report


## STEPS TO FOLLOW
# Api:

### Pre request:
1. Install npm or yarn
2. Visual studio

## How to Execute the API Test Cases ?
   -git Clone https://github.com/umaQA1917/WeatherAppTest.git
   -npm install or yarn install
   -npm test_api 
   -Mochasome Report to view results at WeatherAppTest\cypress\reports

# Covered APi Testcases
#TCO1-Verify Latittude and Longtitude are fech from location Api
#TC02-Verify Weather details for multiple location with
#TC03 -Verify Invalid Location name throwing failed status
#TC04-Verify Invalid Units name throwing failed status
#TC05-Verify non-existent location throwing failed status
#TC06-Verify 401 unAthorized error for invalid Api acces
#TC07-Verify 200 status for valid location,Units and Valid Api key

# UI:
   
### Pre request: Need to run code base for UI
- Execute `npm start` command
- Open [http://localhost:3000/weather](http://localhost:3000/weather) to view it in the browser
## How to Execute the UI Test Cases ?
   -git Clone https://github.com/umaQA1917/WeatherAppTest.git
   -npm install or yarn install
### Run test in different browser
   -npm browser-Chrome
   -npm browser-firefox
   -Mochasome Report to view results at WeatherAppTest\cypress\reports

# Covered UI Testcases
### DashBoard
#TC01-Verify current location with temperature in celcius is appeared in dashboard
#TC02-Verify default location(Berlin and Porto) with temperature in celceius is appeared in dashboard
#TC03 -Verify current and default location weather detail