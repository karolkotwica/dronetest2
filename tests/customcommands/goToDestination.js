var util = require('util');
var events = require('events');

// Waits for N rounds for some element to appear
function goToDestination() {
    events.EventEmitter.call(this);
}

// Node event emitter style
util.inherits(goToDestination, events.EventEmitter);

goToDestination.prototype.command = function(logginToTenfold, MenuTitle) {
    
    this.api
        .refreshUntilElementVisible('xpath', "//div[@class='slds-col--padded contentRegion comm-layout-column']");

    var mobileLayoutIsActive = this.api
        .useXpath()
        .element('xpath', "//button[@title='Toggle SideBar']") ;        
                .refreshUntilElementVisible('xpath', "")

    var standardLayoutIsActive = this.api
        .useXpath()
        .element('xpath', "//nav[@class='forceCommunityNavigationMenu']");

console.log('----------------------------goToDestination----------------------------');
console.log('mobileLayoutIsActive');
console.log(mobileLayoutIsActive);
console.log('standardLayoutIsActive');
console.log(standardLayoutIsActive);
console.log('----------------------------goToDestination----------------------------');

    this.api
        .useXpath()
        .click("//a[@title='" + MenuTitle + "']")
        .pause(200, () => {
           this.emit('complete');
        });
    this.api.pause(30000);
    return this;
};

module.exports = goToDestination;