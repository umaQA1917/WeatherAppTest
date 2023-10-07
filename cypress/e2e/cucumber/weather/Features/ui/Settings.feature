Feature: Validate Setting
  Background:
    Given Launch the weather dashboard page
  #TC05-Validate GUI of setting page
  Scenario: Validate GUI of setting page
    Given Click on settings
    Then Check page title as 'Settings'
    Then Check 'Locations' heading is present
    Then Check 'Select the locations you want to see' information is present below locations
    Then Check exisitng selected location as 'Berlin' is present
    Then Check exisitng selected location as 'Porto' is present
    Then Check Add location is present
    Then Check 'Units' heading for location is present
    Then Check 'Select the unit system of your preference' information is present below units
    Then Check 'Metric ✅' unit is selected defaulty
    Then Able to select 'Imperial ⬜' unit

 #TC06-Add location with Imperical unit and verify weather details
 #TC07-Verify weather details are appeared in Imperical uits
  Scenario Outline: Add location with Imperical unit and verify weather details
    Given Click on settings
    Then Enter the location name as "<Location>"
    Then Check exisitng selected location as 'London' is present
    Then Able to select 'Imperial ⬜' unit
    Then Click on Back to Dashboard
    Then Verify "<Location>" is present in dashboard
    Given Click on current location as "<Location>" with "<Units>" unit
    Then Check weather details location title as "<Location>"
    Then Check weather condtion as "<Condtion>"
    Then Check temprature as "<Temperature>"
    Then Check highest expected temperature "<Highest expected temperature>"
    Then Check lowest expected temperature "<Lowest expected temperature>"
    Then Check Sunrise at "<Sunrise>"
    Then Check Sunset at "<Sunset>"
    Then Check Humidity level in air "<Humidity>"
    Then Check Visibility level in air "<Visibility>"
    Then Click on Back to Dashboard
    Examples:
      | Location | Units    | Condtion | Temperature | Highest expected temperature | Lowest expected temperature | Sunrise    | Sunset     | Humidity | Visibility |
      | London   | Imperial | Clouds   | 69 °F       | H: 71 °F                     | L: 67 °F                    | 8:08:29 AM | 7:28:46 PM | 68%      | 10.0Km     |

 #TC08-Validate user able to remove the location
  Scenario Outline: Validate user able to remove the location
    Given Click on settings
    Then Enter the location name as "<Location>"
    Then Check exisitng selected location as "<Location>" is present
    Then Click on Back to Dashboard
    Then Verify "<Location>" is present in dashboard
    Given Click on settings
    And Click on remove "<Location>" location
    Then Check exisitng selected location as "<Location>" is not present
    Examples:
      | Location |
      | London   |