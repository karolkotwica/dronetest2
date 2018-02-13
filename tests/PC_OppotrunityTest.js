var goToList = require('./PC_GoToObjectList');

var newOpportunitiesProperty = {
    customerName: 'a',
    numberOfUsers : '22',
    notes: 'aaaa',
    phoneSystem : '4com',
    plan: 'Basic',
    stage : 'Churned/Downgraded',
    crmProvider: 'Advologix',
    expectedCloseDate: '22.02.2018',
    customersList : 'test 61',

}

function setFormOpportunity(client) {
    client
    .setValue("//input[@class='slds-input' and @name='numberOfUsers']", newOpportunitiesProperty.numberOfUsers).pause(200)
    .setValue("//input[@class='slds-input' and @name='expectedCloseDate']", newOpportunitiesProperty.expectedCloseDate).pause(200)
    .setValue("//textarea[@class='slds-textarea' and @name='notes']", newOpportunitiesProperty.notes).pause(200)
    .setValue("//select[@class='slds-select' and @name='phoneSystem']", newOpportunitiesProperty.phoneSystem).pause(200)
    .setValue("//select[@class='slds-select' and @name='plan']", newOpportunitiesProperty.plan).pause(200)
    .setValue("//select[@class='slds-select' and @name='stage']", newOpportunitiesProperty.stage).pause(200)
    .setValue("//select[@class='slds-select' and @name='crmProvider']", newOpportunitiesProperty.crmProvider).pause(200)
}

function createNewOpportunities(client) {
    client
        .useXpath()
        .click("//button[@type='button' and contains(text(),'New')]").pause(5000)
        .waitForElementPresent("//div[@class='slds-modal__container']", 5000)
        .setValue("//input[@class='slds-input' and @name='customerName']", newOpportunitiesProperty.customerName).pause(200)
        .assert.elementNotPresent("//input[@class='slds-input' and @name='adminName']")
        .assert.elementNotPresent("//input[@class='slds-input' and @name='adminUsername']")
    setFormOpportunity(client);
}

function createNewOpportunitiesByExistCustomer(client) {
    client
        .useXpath()
        .click("//button[@type='button' and contains(text(),'New')]").pause(5000)
        .waitForElementPresent("//div[@class='slds-modal__container']", 5000)
        .click("//button[@type='button' and contains(text(),'Existing customer')]").pause(1000)
        .setValue("//select[@class='slds-select' and @name='customersList']", newOpportunitiesProperty.crmProvider).pause(200)
        .setValue("//input[@class='slds-input' and @name='opportunityName']", newOpportunitiesProperty.customerName).pause(200)
        
    setFormOpportunity(client);
}

function setOpportunityCloseWon(client) {
    client 
        .useXpath()
        .setValue("//select[@class='slds-select' and @name='stage']", 'Closed Won').pause(200)
        .assert.visible("//select[@class='slds-select' and @name='reasonWon']")
        .setValue("//select[@class='slds-select' and @name='reasonWon']", 'Inbound Caller Identification').pause(200)
}

module.exports = {

    PC_StartOpportunity : function(client) {
        goToList.PC_GoToObject(client, true, 'Opportunities');
        client.assert.visible("//table[@class='slds-table slds-table--bordered slds-table--fixed-layout slds-table--cell-buffer']");
    },

    PC_Opportunities_CreateByNewCustomer : function (client) {
        goToList.PC_GoToObject(client, false, 'Opportunities');
        client.assert.visible("//table[@class='slds-table slds-table--bordered slds-table--fixed-layout slds-table--cell-buffer']");
        createNewOpportunities(client);
        client.click("//button[@type='submit' and contains(text(),'Save')]")
            .pause(3000)
            .waitForElementPresent("//div[@class='slds-page-header forceHighlightsStencilDesktop']", 60000)
     },

    PC_Opportunities_CreateByExistingCustomer : function(client) {
        goToList.PC_GoToObject(client, false, 'Opportunities');
        client.assert.visible("//table[@class='slds-table slds-table--bordered slds-table--fixed-layout slds-table--cell-buffer']");
        createNewOpportunitiesByExistCustomer(client);
        client.pause(2000);
        client.click("//button[@type='submit' and contains(text(),'Save')]")
        waitForElementPresent("//div[@class='slds-page-header forceHighlightsStencilDesktop']", 30000)
    },

    PC_Opportunities_CreateByResonWon : function(client) {
        goToList.PC_GoToObject(client, false, 'Opportunities');
        client.assert.visible("//table[@class='slds-table slds-table--bordered slds-table--fixed-layout slds-table--cell-buffer']");
        createNewOpportunitiesByExistCustomer(client);
        setOpportunityCloseWon(client);
        client.pause(2000);
        client.click("//button[@type='submit' and contains(text(),'Save')]")
        waitForElementPresent("//div[@class='slds-page-header forceHighlightsStencilDesktop']", 30000)
    },

    PC_EndOpportunity: function(client) {
        client.end();
    }
  }; 