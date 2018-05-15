module.exports = {

    PC_IntegrationsStart : function(client) {
        client
            .loginToTenfold()
            .goToDestination(false, 'Integrations')
            .refreshUntilElementVisible("xpath", "//h1[contains(text(), 'CRMs')]")
            .refreshUntilElementVisible("xpath", "//h1[contains(text(), 'Phone Systems')]");
            // .refreshUntilElementVisible("xpath", "//nav[@class='forceCommunityNavigationMenu']")
            //.click("//a[@title = 'Integrations']")
    },

    PC_IntegrationsEnd : function(client) {
        client.end();
    }
  }; 