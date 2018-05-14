module.exports = {

    PC_IntegrationsStart : function(client) {
        client.loginToTenfold();
        client
            .refreshUntilElementVisible("xpath", "//nav[@class='forceCommunityNavigationMenu']")
            .click("//a[@title = 'Integrations']")
            .refreshUntilElementVisible("xpath", "//h1[contains(text(), 'CRMs')]")
            .refreshUntilElementVisible("xpath", "//h1[contains(text(), 'Phone Systems')]");
    },

    PC_ChildPartner_End : function(client) {
        client.end();
    }
  }; 