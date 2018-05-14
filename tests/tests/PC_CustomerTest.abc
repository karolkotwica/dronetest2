var newCustomerProperty = {
    adminName : 'testSelenium',
    email : 'testSelenium@wp.pl',
    phoneNbr : '123 456 789',
    companyName : 'testSeleniumCompany',
    purchasedUsers : '12',
    notes : 'testSelenium testSelenium',
    crmProvider : 'autotask',
    phoneSystem : 'ActivePBX',
    plan : 'Pro',
    language : 'Italiano',
}

function createNewCustomer(client) {
    client
        .useXpath()
        .click("//button[@type='button' and contains(text(),'New')]").pause(5000)
        .setValue("//input[@class='slds-input' and @name='adminName']", newCustomerProperty.adminName).pause(200)
        .setValue("//input[@class='slds-input' and @name='Email']", newCustomerProperty.email).pause(200)
        .setValue("//input[@class='slds-input' and @name='phoneNbr']", newCustomerProperty.phoneNbr).pause(200)
        .setValue("//input[@class='slds-input' and @name='companyName']", newCustomerProperty.companyName).pause(200)
        .setValue("//input[@class='slds-input' and @name='purchasedUsers']", newCustomerProperty.purchasedUsers).pause(200)
        .setValue("//textarea[@class='slds-textarea' and @name='notes']", newCustomerProperty.notes).pause(200)
        .click("//select[@class='slds-select' and @name='crmProvider']").keys(['\uE015', '\uE006']).pause(200)
        .click("//select[@class='slds-select' and @name='phoneSystem']").keys(['\uE015', '\uE006']).pause(200)
        .click("//select[@class='slds-select' and @name='plan']").keys(['\uE015', '\uE006']).pause(200)
        .click("//select[@class='slds-select' and @name='language']").keys(['\uE015', '\uE006']).pause(200)
        .pause(5000)
        .click("//button[@type='submit' and contains(text(),'Save')]")
}

function makeid(lengthRandomString) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < lengthRandomString; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

function removeCustomer(client) {
    client            
        .assert.visible("//a[@class='slds-tabs--default__link' and contains(text(),'DANGER ZONE')]")
        .click("//a[@class='slds-tabs--default__link' and contains(text(),'DANGER ZONE')]").pause(1000)
        .click("//button[@type='button' and contains(text(),'Remove')]");
        client
            .refreshUntilElementVisible("xpath","//div[@class='slds-modal__container']")
            .click("//button[@class='slds-button slds-button--destructive' and contains(text(),'Remove')]")
            .refreshUntilElementVisible("xpath","//table[@class='slds-table slds-table--bordered slds-table--fixed-layout slds-table--cell-buffer']");
}

module.exports = {
    PC_CustomerList : function (client) {
        client.loginToTenfold();        
        client.refreshUntilElementVisible('xpath', "//nav[@class='forceCommunityNavigationMenu']");
        client.goToDestination(false, 'Customers');
        client.refreshUntilElementVisible("xpath", "//table[@class='slds-table slds-table--bordered slds-table--fixed-layout slds-table--cell-buffer']");        
        newCustomerProperty.email = makeid(20) + '@wp.pl';        
        createNewCustomer(client);
        client
            .refreshUntilElementVisible("xpath", "//div[@class='slds-page-header forceHighlightsStencilDesktop']")
            .refreshUntilElementVisible("xpath", "//ul[@class='slds-tabs--default__nav']");
        removeCustomer(client);        
    }
}; 