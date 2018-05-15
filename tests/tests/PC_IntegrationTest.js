module.exports = {

    PC_IntegrationsStart : function(client) {
        client.loginToTenfold();

        /*
        client.goToDestination(false, 'Integrations');
        

        client
            .refreshUntilElementVisible("xpath", "//nav[@class='forceCommunityNavigationMenu']")
            .click("//a[@title = 'Integrations']")
            .refreshUntilElementVisible("xpath", "//h1[contains(text(), 'CRMs')]")
            .refreshUntilElementVisible("xpath", "//h1[contains(text(), 'CRMs')]")
            .refreshUntilElementVisible("xpath", "//h1[contains(text(), 'Phone Systems')]");
        */
    },

    PC_IntegrationsEnd : function(client) {
        client.end();
    }
  }; 