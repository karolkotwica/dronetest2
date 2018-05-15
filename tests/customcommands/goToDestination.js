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
        .refreshUntilElementVisible('xpath', "//div[@class='siteforcePrmBody']")
        .element('class name', 'navigationMenu', (result) => {
            console.log('---------bbbbbbbbbb------------------');
            console.log(result.status);
            console.log('---------bbbbbbbbbb------------------');
        })
        .element('class name', 'cAltToggleNav', (result) => {
        console.log('---------cccccccccc------------------');
        console.log(result.status);
        console.log('---------cccccccccc------------------');
    })

//community_navigation-global-navigation-trigger[@class='cAltToggleNav slds-icon_x-small']//lightning-button-icon//button[@title='Toggle SideBar']
    this.api.element('class name', 'cAltToggleNav', (result) => {
        console.log('---------cccccccccc------------------');
        console.log(result.status);
        console.log('---------cccccccccc------------------');
    })

    this.api
        .refreshUntilElementVisible('xpath', "//div[@class='siteforcePrmBody']");
console.log('---------ABCDEF1------------------');
    this.api
        .refreshUntilElementVisible('xpath', "//div[@class='cCenterPanel']");    
console.log('---------ABCDEF2------------------');        
        //div[@class='cCenterPanel slds-m-top--x-large slds-p-horizontal--medium']
console.log('---------ABCDEF3------------------');        
    this.api
        .refreshUntilElementVisible('xpath', "//div[@class='slds-col--padded contentRegion comm-layout-column']");
console.log('---------ABCDEF4------------------');        

    this.api
        .useXpath()
        .element('xpath', "//button[@title='Toggle SideBar']", function(result){
            console.log('----------------------------aaaaaaaaaaaaaaaa----------------------------');            
            console.log(result.status)
            console.log('----------------------------aaaaaaaaaaaaaaaa----------------------------');            
        });
console.log('between two apis');
     this.api
        .useXpath()
        .element('xpath', "//nav[@class='forceCommunityNavigationMenu']", function(result){
            standardLayoutIsActive = result.status;
        });

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