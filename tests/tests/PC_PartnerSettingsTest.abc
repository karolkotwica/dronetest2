module.exports = {

    PC_PartnerSettingSupportSettings : function(client) {
        client.loginToTenfold();
        client
            .refreshUntilElementVisible("xpath", "//nav[@class='forceCommunityNavigationMenu']")
            .click("//a[@title = 'Partner settings']");
        client
            .refreshUntilElementVisible("xpath", "//h1[contains(text(), 'Support settings')]")
            .click("//button[@type='button' and contains(text(), 'Save changes')]")
            .waitForElementPresent("//span[contains(text(), 'Partner settings updated')]", 15000);
    },

    PC_ChildPartner_End : function(client) {
        client.end();
    }
  }; 