var newChildPartnerProperty = {
    adminName : 'aaa',
    adminEmal : 'aaa@wp.pl',
    phoneNumber : '123 456 789',
    comapnyName : 'testCompany'
}

function createNewChildPartner(client) {
    client
        .useXpath()
        .click("//button[@type='button' and contains(text(),'New')]").pause(5000)
        .setValue("//div/input[@class='slds-input' and @name='adminName' and @type='text']", newChildPartnerProperty.adminName).pause(200)
        .setValue("//input[@class='slds-input' and @name='adminName' and @type='email']", newChildPartnerProperty.adminEmal).pause(200)
        .setValue("//input[@class='slds-input' and @name='phoneNbr']", newChildPartnerProperty.phoneNumber).pause(200)
        .setValue("//input[@class='slds-input' and @name='companyName']", newChildPartnerProperty.comapnyName).pause(200)
}

function assertValue(client, xpathElement, expectedValue) {
    client.getValue(xpathElement, function(result){
        client.assert.equal(result.value,expectedValue);
    })
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

function formShouldBeEmpty(client) {
    client
    .click("//button[@type='button' and contains(text(),'New')]").pause(5000)
    assertValue(client, "//div/input[@class='slds-input' and @name='adminName' and @type='text']", '');
    assertValue(client, "//input[@class='slds-input' and @name='adminName' and @type='email']", '');
    assertValue(client, "//input[@class='slds-input' and @name='phoneNbr']", '');
    assertValue(client, "//input[@class='slds-input' and @name='companyName']", '');
}

module.exports = {
    PC_ChildPartner_NewRecord_Cancel_ClearForm : function(client) {
        client.loginToTenfold();
        client.goToDestination(false, 'Child Partners');
        client.refreshUntilElementVisible("xpath", "//table[@class='slds-table slds-table--bordered slds-table--fixed-layout slds-table--cell-buffer']");
        client.assert.visible("//table[@class='slds-table slds-table--bordered slds-table--fixed-layout slds-table--cell-buffer']");
        createNewChildPartner(client);
        client.click("//button[@class='slds-button slds-button--neutral' and contains(text(),'Cancel')]").pause(4000);
        formShouldBeEmpty(client);
    },

    PC_ChildPartner_End : function(client) {
        client.end();
    }
  }; 