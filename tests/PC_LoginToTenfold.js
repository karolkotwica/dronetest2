module.exports = {
    PC_LoginToTenfold : function (client, username, pass) {
      if(username == undefined || username == null || pass == undefined || pass == null) {
        console.log('username and password is null');
        process.exit(1);
      }
      client
        .url('https://test.salesforce.com/')
        .waitForElementPresent("#username", 60000)
        .assert.visible("#username")
        .assert.visible("#password")
        .setValue('#username',username).pause(200)
        .setValue('#password',pass).pause(200)

        client.useXpath()
        .assert.visible("//input[@value='LOG IN']")
        .click("//input[@value='LOG IN']").pause(200)
        .assert.visible("//input[@value='AUTHORIZE']")
        .click("//input[@value='AUTHORIZE']").pause(15000)
        .assert.visible("//div[@class='cProfileMenu slds-m-left--x-small']");
    }
  };
  