var google = require('./PC_LoginToTenfold.js');

module.exports = {
    PC_GoToObject : function (client, logginToTenfold, MenuTitle) {
        if(logginToTenfold == true) {
            google.PC_LoginToTenfold(client);
        }
        client
            .useXpath()
            .waitForElementPresent("//nav[@class='forceCommunityNavigationMenu']", 60000).pause(10000)
            .element('xpath', "//a/span[contains(text(), 'More')]", function(result) {
                if(result.status != -1) {
                    client
                        .click("//a/span[contains(text(), 'More')]")
                        .click("//a[@title='" + MenuTitle + "']")
                } else {
                    client
                    .click("//a[@title='" + MenuTitle + "']")
                }
            }); 
        client.pause(10000)
    }
  };