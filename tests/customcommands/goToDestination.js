var util = require('util');
var events = require('events');

// Waits for N rounds for some element to appear
function goToDestination() {
    events.EventEmitter.call(this);
}

// Node event emitter style
util.inherits(goToDestination, events.EventEmitter);

goToDestination.prototype.command = function(logginToTenfold, MenuTitle) {
    var testDuration = {maxRounds: 10, timeout: 30000};

     this.api
        .useXpath()
        .refreshUntilElementVisible('xpath', "//div[@class='cNotifications']", testDuration)
        .element('xpath', "//community_navigation-global-navigation-trigger[@class='cAltToggleNav slds-icon_x-small']", function(result) {
            if(result.value && result.value.ELEMENT) {
                this
                    .click("//community_navigation-global-navigation-trigger[@class='cAltToggleNav slds-icon_x-small']")
                    .click("//a[@class='menuItemLink'][contains(text(),'Integrations')]");
            }
        })
        .element('xpath', "//nav[@class='forceCommunityNavigationMenu']", function(result) {
            if(result.value && result.value.ELEMENT) {
                this
                    .element('xpath', "//a/span[contains(text(), 'More')]", function(result) {  
                        if(result.value && result.value.ELEMENT) {
                            this
                                .click("//a/span[contains(text(), 'More')]")
                                .click("//div[@class='subMenu']//a[contains(text(),'" + MenuTitle + "')]");
                        } else {
                            this
                                .click("//a[@title='" + MenuTitle + "']")
                        }
                    })
            }
        })
        .refreshUntilElementVisible('xpath', "//nav[@class='forceCommunityNavigationMenu']", testDuration)
        .pause(200, () => {
           this.emit('complete');
        });

    this.api.pause(30000);
    return this;
};

module.exports = goToDestination;