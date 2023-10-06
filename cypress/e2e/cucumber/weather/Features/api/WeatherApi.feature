Feature: Verify Weather details
  #TCO1-Verify Latittude and Longtitude are fech from location Api
  #TC02-Verify Weather details for multiple location with units
  Scenario Outline: Get latitude and longitude and Verify Weather Details
    Given I have a location "<Location>"
    And I have units "<Units>"
    When I fetch the location details
    Then The response should include latitude and longitude
    And I fetch the weather details using the location and units
    Then The response should include temperature, sunrise, sunset,Humidity and Visibility

    Examples:
      | Location      | Units    |
      | Tranby        | Imperial |
      | Oslo          | Metric   |
      | New York      | Imperial |
      | London        | Metric   |
      | OtherLocation | Imperial |

  #TC03 -Verify Invalid Location name throwing failed status
  #TC04-Verify Invalid Units name throwing failed status
  #TC05-Verify non-existent location throwing failed status
  Scenario Outline: Get Location,Units and Weather Details - Negative Scenarios
    Given I have a location "<Location>"
    And I have units "<Units>"
    When I fetch the location details
    Then The response should include latitude and longitude
    And I fetch the weather details using the location and units

    Examples:
      | Location            | Units        |
      | Invalid             | Imperial     |
      | Tranby              | InvalidUnits |
      | NonExistentLocation | Metric       |

  #TC06-Verify 401 unAthorized error for invalid Api acces
  #TC07-Verify 200 status for valid location,Units and Valid Api key
  Scenario Outline: Get Location,Units,Api Key and Weather Details - Valid and Invalid API Keys
    Given I have a location "<Location>"
    And I have units "<Units>"
    And I have an API key "<ApiKey>"
    When I fetch the location details
    And I fetch the weather details using the location, units, and API key

    Examples:
      | Location      | Units    | ApiKey                           |
      | Tranby        | Imperial | eb8a70f875f4e4baabc1399cec36e4b6 |
      | Oslo          | Metric   | INVALID_API_KEY                  |
      | New York      | Imperial | eb8a70f875f4e4baabc1399cec36e4b6 |
      | London        | Metric   | INVALID_API_KEY                  |
      | OtherLocation | Imperial | eb8a70f875f4e4baabc1399cec36e4b6 |
