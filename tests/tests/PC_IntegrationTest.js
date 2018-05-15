module.exports = {

    PC_IntegrationsStart : function(client) {
        var testDuration2 = {maxRounds: 1, timeout: 3000};

        client
            .loginToTenfold()
            .goToDestination(false, 'Integrations')
            .refreshUntilElementVisible("xpath", "//h1[contains(text(), 'CRMs')]", testDuration2)
            // .refreshUntilElementVisible("xpath", "//h1[contains(text(), 'Phone Systems')]", testDuration2);
            // .refreshUntilElementVisible("xpath", "//nav[@class='forceCommunityNavigationMenu']")
            //.click("//a[@title = 'Integrations']")
    },

    PC_IntegrationsEnd : function(client) {
        client.end();
    }
  }; 