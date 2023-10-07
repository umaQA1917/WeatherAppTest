Feature: Mock Current Location Data for UI
    Background:
        Given Launch the weather dashboard page
   #TC03 -Verify current and default location weather details
    Scenario Outline: Verify current and default location weather details
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
            | Location | Units  | 27 °C | H: 30 °C | L: 23 °C | 8:35:40 AM | 8:09:26 PM | 50% | 10.0Km | Condtion | Temperature | Highest expected temperature | Lowest expected temperature | Sunrise    | Sunset     | Humidity | Visibility |
            | Oslo     | Metric | 27 °C | H: 30 °C | L: 23 °C | 8:35:40 AM | 8:09:26 PM | 50% | 10.0Km | Clouds   | 14 °C       | H: 15 °C                     | L: 12 °C                    | 7:30:43 AM | 6:40:15 PM | 52%      | 10.0Km     |
            | Berlin   | Metric | 27 °C | H: 30 °C | L: 23 °C | 8:35:40 AM | 8:09:26 PM | 50% | 10.0Km | Mist     | 11 °C       | H: 19 °C                     | L: 10 °C                    | 7:13:27 AM | 6:36:19 PM | 92%      | 3.3Km      |
            | Porto    | Metric | 27 °C | H: 30 °C | L: 23 °C | 8:35:40 AM | 8:09:26 PM | 50% | 10.0Km | Clear    | 27 °C       | H: 30 °C                     | L: 23 °C                    | 8:35:40 AM | 8:09:26 PM | 50%      | 10.0Km     |