module.exports = {
    PC_GoToObject : function (client) {    	
        client
        	.loginToTenfold()
            .goToDestination(true, 'Customers')
            .refreshUntilElementVisible("xpath", "//a[@title='Customers']")
            .end();
        }
  };