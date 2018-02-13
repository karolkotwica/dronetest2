
var google = require('./PC_LoginToTenfold.js');

module.exports = {

    PC_IntegrationsStart : function(client) {
        google.PC_LoginToTenfold(client);
        client
            .waitForElementPresent("//nav[@class='forceCommunityNavigationMenu']", 60000).pause(10000)
            .element('xpath', "//a/span[contains(text(), 'More')]", function(result) {
                if(result.status != -1) {
                    client
                        .click("//a/span[contains(text(), 'More')]")
                        .click("//a[@title = 'Integrations']")
                        .waitForElementPresent("//h1[contains(text(), 'CRMs')]", 2000)
                        .waitForElementPresent("//h1[contains(text(), 'Phone Systems')]", 2000);
                } else {
                    client
                        .click("//a/span[contains(text(), 'Settings')]")
                        .click("//a[@title = 'Integrations']")
                        .waitForElementPresent("//h1[contains(text(), 'CRMs')]", 2000)
                        .waitForElementPresent("//h1[contains(text(), 'Phone Systems')]", 2000);
                }
            });
    },
    PC_ChildPartner_End : function(client) {
        client.end();
    }
  }; 