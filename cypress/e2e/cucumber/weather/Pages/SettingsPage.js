class SettingsPage
{
    settingTitle()//Settings
    {
        return cy.get("h1")
    }
    backToDashBoard()//Back to Dashboard
    {
        return cy.get("a[href='/weather']")
    }
    loc_Heading()
    {
        return cy.get('section').eq(0).find("h2")
    }
    loc_Info()
    {
        return cy.get('section').eq(0).find("p")
    }
    existing_Location(val)
    {
        return cy.get('section').eq(0).contains('span', val)
    }
    add_Location()
    {
        return cy.get('section').eq(0).contains('button', 'Add')
    }

    units_Heading()
    {
        return cy.get('section').eq(1).find("h2")
    }
    units_Info()
    {
        return cy.get('section').eq(1).find("p")
    }
    units_Sel(val)
    {
        return cy.get('section').eq(1).contains('button', val)
    }

    loc_Remove(val)
    {
        return cy.get("button[aria-label*='"+val+"']")
    }
    
}

const setting = new SettingsPage();
export default setting