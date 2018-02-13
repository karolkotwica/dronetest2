var goToList = require('./PC_GoToObjectList');

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
        .setValue("//select[@class='slds-select' and @name='crmProvider']", newCustomerProperty.crmProvider).pause(200)
        .setValue("//select[@class='slds-select' and @name='phoneSystem']", newCustomerProperty.phoneSystem).pause(200)
        .setValue("//select[@class='slds-select' and @name='plan']", newCustomerProperty.plan).pause(200)
        .setValue("//select[@class='slds-select' and @name='language']", newCustomerProperty.language).pause(200)
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
        .click("//button[@type='button' and contains(text(),'Remove')]")
        .waitForElementPresent("//div[@class='slds-modal__container']", 1000)
        .click("//button[@class='slds-button slds-button--destructive' and contains(text(),'Remove')]")
        .waitForElementPresent("//table[@class='slds-table slds-table--bordered slds-table--fixed-layout slds-table--cell-buffer']", 10000);
}

module.exports = {

    PC_StartCustomer : function(client) {
        goToList.PC_GoToObject(client, true, 'Customers');
        client.assert.visible("//table[@class='slds-table slds-table--bordered slds-table--fixed-layout slds-table--cell-buffer']");
    },

    PC_CreateCustomer_ExistCustomer(client) {
        goToList.PC_GoToObject(client, false, 'Customers');
        client.assert.visible("//table[@class='slds-table slds-table--bordered slds-table--fixed-layout slds-table--cell-buffer']");
        createNewCustomer(client); 
        client.waitForElementPresent("//div[@class='toastContainer slds-notify_container slds-is-relative']", 5000, function() {
            client.click("//button[@class='slds-button slds-button--neutral' and contains(text(),'Cancel')]").pause(4000)
        })
    }, 

    PC_CustomerList : function (client) {
        goToList.PC_GoToObject(client, false, 'Customers');
        client.assert.visible("//table[@class='slds-table slds-table--bordered slds-table--fixed-layout slds-table--cell-buffer']");
        newCustomerProperty.email = makeid(20) + '@wp.pl'; 
        createNewCustomer(client);
        client.waitForElementPresent("//div[@class='slds-page-header forceHighlightsStencilDesktop']", 30000)
            .waitForElementPresent("//ul[@class='slds-tabs--default__nav']", 5000);
         removeCustomer(client);
    },

    PC_CustomerEnd :function(client) {
        client.end(); 
    }
  }; 