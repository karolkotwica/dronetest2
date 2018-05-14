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
    .click("//select[@class='slds-select' and @name='phoneSystem']").keys(['\uE015', '\uE006']).pause(200)
    .click("//select[@class='slds-select' and @name='plan']").keys(['\uE015', '\uE006']).pause(200)
    .click("//select[@class='slds-select' and @name='stage']").keys(['\uE015', '\uE006']).pause(200)
    .click("//select[@class='slds-select' and @name='crmProvider']").keys(['\uE015', '\uE006']).pause(200)
}

function createNewOpportunities(client) {
    client
        .useXpath()
        .click("//button[@type='button' and contains(text(),'New')]").pause(5000)
        .refreshUntilElementVisible("xpath","//div[@class='slds-modal__container']")
        .setValue("//input[@class='slds-input' and @name='customerName']", newOpportunitiesProperty.customerName).pause(200)
        .assert.elementNotPresent("//input[@class='slds-input' and @name='adminName']")
        .assert.elementNotPresent("//input[@class='slds-input' and @name='adminUsername']")
    setFormOpportunity(client);
}

function createNewOpportunitiesByExistCustomer(client) { 
    client
        .useXpath()
        .click("//button[@type='button' and contains(text(),'New')]").pause(5000)
        .refreshUntilElementVisible("xpath","//div[@class='slds-modal__container']")
        .click("//button[@type='button' and contains(text(),'Existing customer')]").pause(1000)
        .click("//select[@class='slds-select' and @name='customersList']").keys(['\uE015', '\uE006']).pause(200)
        .setValue("//input[@class='slds-input' and @name='opportunityName']", newOpportunitiesProperty.customerName).pause(200)
        
    setFormOpportunity(client);
}

function setOpportunityCloseWon(client) {
    client 
        .useXpath()
        .setValue("//select[@class='slds-select' and @name='stage']", 'Closed Won').pause(200)
        .assert.visible("//select[@class='slds-select' and @name='reasonWon']")
        .click("//select[@class='slds-select' and @name='reasonWon']").keys(['\uE015', '\uE006']).pause(200)
}

module.exports = {

    before : function(client) {
        client.loginToTenfold();
    },

    beforeEach : function(client) {
        client
            .goToDestination(false, 'Opportunities')
            .refreshUntilElementVisible("xpath", "//table[@class='slds-table slds-table--bordered slds-table--fixed-layout slds-table--cell-buffer']");
    }, 

    after: function(client) {
        client.end();
    },

    PC_Opportunities_CreateByNewCustomer : function (client) {
        createNewOpportunities(client);
        client.click("//button[@type='submit' and contains(text(),'Save')]")
            .pause(3000)
            .refreshUntilElementVisible("xpath","//div[@class='slds-page-header forceHighlightsStencilDesktop']");
     },

    PC_Opportunities_CreateByExistingCustomer : function(client) {
        createNewOpportunitiesByExistCustomer(client);
        client.pause(2000);
        client
            .click("//button[@type='submit' and contains(text(),'Save')]")
            .refreshUntilElementVisible("xpath", "//div[@class='slds-page-header forceHighlightsStencilDesktop']")
    },

    PC_Opportunities_CreateByResonWon : function(client) {
        createNewOpportunitiesByExistCustomer(client);
        setOpportunityCloseWon(client);
        client.pause(2000);
        client
            .click("//button[@type='submit' and contains(text(),'Save')]")
            .refreshUntilElementVisible("xpath", "//div[@class='slds-page-header forceHighlightsStencilDesktop']");
    },
  }; 