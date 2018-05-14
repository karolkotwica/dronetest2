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
        .refreshUntilElementVisible('xpath', "//nav[@class='forceCommunityNavigationMenu']")
        .useXpath()
        .element('xpath', "//a/span[contains(text(), 'More')]", function(result) {
            if(result.status != -1) {
                this
                    .click("//a/span[contains(text(), 'More')]")
                    .click("//a[@title='" + MenuTitle + "']")
            } else {
                this
                .click("//a[@title='" + MenuTitle + "']")
            }
        }) 
        .pause(200, () => {
           this.emit('complete');
        });
    this.api.pause(30000);
    return this;
};

module.exports = goToDestination;