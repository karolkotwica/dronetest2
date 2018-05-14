var util = require('util');
var events = require('events');

function loginToTenfold() {
    events.EventEmitter.call(this);
}

util.inherits(loginToTenfold, events.EventEmitter);

loginToTenfold.prototype.command = function() {

    this.api
        .url('https://int-tenfoldint.cs90.force.com/s/')
        .refreshUntilElementVisible('css selector', "#username")
        .assert.visible("#username")
        .assert.visible("#password")
        .setValue('#username', this.api.globals.username).pause(200)
        .setValue('#password', this.api.globals.pass).pause(200);

    this.api.useXpath()
        .refreshUntilElementVisible('XPath', "//input[@value='LOG IN']")
        .click("//input[@value='LOG IN']").pause(200)
        .refreshUntilElementVisible('XPath', "//input[@value='AUTHORIZE']")
        .click("//input[@value='AUTHORIZE']").pause(200)
        .refreshUntilElementVisible('XPath', "//div[@class='cProfileMenu slds-m-left--x-small']")
        .pause(200, () => {
           this.emit('complete');
        });

    this.api.pause(30000);
    return this;
};

module.exports = loginToTenfold;