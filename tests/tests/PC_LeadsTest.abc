function makeid(lengthRandomString) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < lengthRandomString; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

function shouldCreateNewLead(client) {
    client
    .refreshUntilElementVisible('class name', "slds-modal__container")
    .setValue("//input[@class='slds-input' and @name='firstName']", 'tempFirstName').pause(200)
    .setValue("//input[@class='slds-input' and @name='lastName']", 'tempLastName').pause(200)
    .setValue("//input[@class='slds-input' and @name='companyName']", nameFromFirstCrete).pause(200)
    .setValue("//input[@class='slds-input' and @name='email']", makeid(20) + '@wp.pl').pause(200)
    .setValue("//input[@class='slds-input' and @name='phone']", '1234567890').pause(200)
    .setValue("//input[@class='slds-input' and @name='website']", 'http://www.example.com').pause(200)
    .setValue("//textarea[@class='slds-textarea' and @name='comments']", 'Lorem ipsum dolor sit amet').pause(200)
    .click("//select[@class='slds-select' and @name='crmProvider']").keys(['\uE015', '\uE015', '\uE015', '\uE006']).pause(200)
    .click("//select[@class='slds-select' and @name='phoneSystem']").keys(['\uE015', '\uE015', '\uE015', '\uE006']).pause(200)
    .click("//select[@class='slds-select' and @name='employeeSizeRange']").keys(['\uE015', '\uE006']).pause(200)    
    .click("//button[@type='submit' and contains(text(),'Save')]").pause(200);    
}

function getLeadRecordIdFromURL(client) {
    client.url(function(result) {
        var url = result.value;
        client.assert.ok(url.indexOf('lead/') !== -1, 'We are redirect on lead record page');
        var subUrl = url.substring(url.indexOf('lead/'));
        leadRecordId = subUrl.substring(subUrl.indexOf('/')+1, subUrl.lastIndexOf('/'));
        client.assert.ok(leadRecordId.length == 18, 'We have record id');
    });
}

function changeOptions(client) {
    client.click("//button[@type='button' and contains(text(),'Existing Customer')]").pause(10000); 
    client.expect.element("//button[@type='button' and contains(text(),'Existing Customer')]").to.have.attribute('class').which.contains('slds-button--brand');
    client.expect.element("//button[@type='button' and contains(text(),'New Customer')]").to.have.attribute('class').which.contains('slds-button--neutral');
    client.pause(1000);
    client.click("//button[@type='button' and contains(text(),'Existing Opportunity')]").pause(1000);
    client.expect.element("//button[@type='button' and contains(text(),'Existing Opportunity')]").to.have.attribute('class').which.contains('slds-button--neutral');
    client.expect.element("//button[@type='button' and contains(text(),'New Opportunity')]").to.have.attribute('class').which.contains('slds-button--brand'); 
    client.pause(1000);
    client.click("//button[@type='button' and contains(text(),'New Customer')]").pause(5000)
} 

function deleteLead(client) {
    client
        .url('https://int-tenfoldint.cs90.force.com/' + leadRecordId)
        .refreshUntilElementVisible("//div[@class='slds-page-header forceHighlightsStencilDesktop']");
}

function selectExistingCustomer(client) {
    client.click("//button[@type='button' and contains(text(),'Existing Customer')]").pause(5000)
    .setValue("//input[@class='slds-input' and @name='test']", nameFromFirstCrete).pause(1000)
    .click("//li[@class='slds-listbox__item']").pause(1000)
    .click("//button[@type='button' and contains(text(),'Existing Opportunity')]").pause(2000);
    client.expect.element("//button[@type='button' and contains(text(),'Existing Opportunity')]").to.have.attribute('class').which.contains('slds-button--brand');
    client.expect.element("//button[@type='button' and contains(text(),'New Opportunity')]").to.have.attribute('class').which.contains('slds-button--neutral');
    client.click("//select[@class='slds-select' and @name='selectedOpportunity']").keys(['\uE015', '\uE006']).pause(200)
}

function createNewLead(client) {

    client.refreshUntilElementVisible('xpath', "//nav[@class='forceCommunityNavigationMenu']");
    client.click("//a[@title = 'Deal Registration']")
    client.refreshUntilElementVisible('xpath', "//table[@class='slds-table slds-table--bordered slds-table--fixed-layout slds-table--cell-buffer']");

    client
        .useXpath()
        .click("//button[@type='button' and contains(text(),'New')]")
        .refreshUntilElementVisible("xpath", "//div[@class='slds-modal__container']");

    shouldCreateNewLead(client);
    client.refreshUntilElementVisible("class name", "record-home-details");
    getLeadRecordIdFromURL(client);    
}

var leadRecordId;
var nameFromFirstCrete = makeid(30);

module.exports = {

    before : function(client) {
        client.loginToTenfold();
    },

    after: function(client) {
        client.end(); 
    },

    PC_Lead_CreateFirstLead : function(client) {
        createNewLead(client);
    }    
};