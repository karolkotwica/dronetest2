var google = require('./PC_LoginToTenfold.js');

function validPage(client) {
    client
    .waitForElementPresent("//h1[contains(text(), 'Support settings')]", 2000)
    .waitForElementPresent("//h1[contains(text(), 'Email settings')]", 2000);
}

function goToPage(client) {
    client.waitForElementPresent("//nav[@class='forceCommunityNavigationMenu']", 60000).pause(10000)
        .element('xpath', "//a/span[contains(text(), 'More')]", function(result) {
            if(result.status != -1) {
                client
                    .click("//a/span[contains(text(), 'More')]")
                    .click("//a[@title = 'Partner settings']");
                validPage(client);
            } else {
                client
                    .click("//a/span[contains(text(), 'Settings')]")
                    .click("//a[@title = 'Partner settings']");
                validPage(client);
            }
        });
} 

module.exports = {

    PC_PartnerSettingStart : function(client) {
        google.PC_LoginToTenfold(client);
        goToPage(client);
    },

    PC_PartnerSettingSupportSettings : function(client) {
        client.pause(4000)
        .click("//button[@type='button' and contains(text(), 'Save changes')]")
        .waitForElementPresent("//span[contains(text(), 'Partner settings updated')]", 5000);
    },

    PC_ChildPartner_End : function(client) {
        client.end();
    }
  }; 