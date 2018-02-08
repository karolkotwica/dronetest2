module.exports = {
    PC_LoginToTenfold : function (client) {
      if(client.globals.username == undefined || client.globals.username == null || client.globals.pass == undefined || client.globals.pass == null) {
        console.log('username or password is null');
        process.exit(1);
      }
      client
        .url('https://int-tenfoldint.cs90.force.com/s/')
        .waitForElementPresent("#username", 60000)
        .assert.visible("#username")
        .assert.visible("#password")
        .setValue('#username',client.globals.username).pause(200)
        .setValue('#password',client.globals.pass).pause(200)

        client.useXpath()
        .assert.visible("//input[@value='LOG IN']")
        .click("//input[@value='LOG IN']").pause(20000)
        .source(function (result){
            console.log(result.value);
        }
        .waitForElementPresent("//input[@value='AUTHORIZE']", 60000)
        .assert.visible("//input[@value='AUTHORIZE']")
        .click("//input[@value='AUTHORIZE']").pause(15000)
        .assert.visible("//div[@class='cProfileMenu slds-m-left--x-small']");
    }
  };
  