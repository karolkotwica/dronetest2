var util = require('util');
var events = require('events');

// Waits for N rounds for some element to appear
function goToDestination() {
    events.EventEmitter.call(this);
}

// Node event emitter style
util.inherits(goToDestination, events.EventEmitter);

goToDestination.prototype.command = function(logginToTenfold, MenuTitle) {
/*
    this.api
        .refreshUntilElementVisible('xpath', "//div[@class='siteforcePrmBody']")
        .element('class name', 'navigationMenu', (result) => {
            console.log('---------bbbbbbbbbb------------------');
            console.log(result.status);
            console.log('---------bbbbbbbbbb------------------');
        })
        .element('class name', 'cAltToggleNav', (result) => {
        console.log('---------cccccccccc------------------');
        console.log(result);
        console.log('---------cccccccccc------------------');
    })

    //community_navigation-global-navigation-trigger[@class='cAltToggleNav slds-icon_x-small']//lightning-button-icon//button[@title='Toggle SideBar']
    this.api.element('class name', 'cAltToggleNav', (result) => {
        console.log('---------dddddd------------------');
        console.log(result);
        console.log('---------dddddd------------------');
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
*/
    // this.api
    //     .useXpath()
    //     .refreshUntilElementVisible('xpath', "//div[@class='siteforcePrmBody']")

    var testDuration = {maxRounds: 1, timeout: 3000};
    var mobileMenuFound = 0;

     this.api
        //.resizeWindow(1300, 400)
        .resizeWindow(400, 400)
        .useXpath()
        .refreshUntilElementVisible('xpath', "//div[@class='cNotifications']", testDuration)
        .element('xpath', "//community_navigation-global-navigation-trigger[@class='cAltToggleNav slds-icon_x-small']", function(result) {
            if(result2.value && result.value.ELEMENT) {
                this
                    .click("//community_navigation-global-navigation-trigger[@class='cAltToggleNav slds-icon_x-small']")
                    .click("//a[@class='menuItemLink'][contains(text(),'Integrations')]");
            }
        })
//        .isVisible("//community_navigation-global-navigation-trigger[@class='cAltToggleNav slds-icon_x-small']", function(result) {
            //if(result.value) {
//                this
//                    .click("//community_navigation-global-navigation-trigger[@class='cAltToggleNav slds-icon_x-small']")
//                    .click("//a[@class='menuItemLink'][contains(text(),'Integrations')]");
                //a[@class='menuItemLink'][contains(text(),'Integrations')]
                // this.api.click or this.click?
  //          }
  //          mobileMenuFound = 1;
  //          console.log('----------------------------ffffffffffffffffffff----------------------------');
  //          console.log(result.value);
  //          console.log('----------------------------ffffffffffffffffffff----------------------------');
  //      })
        .isVisible("//nav[@class='forceCommunityNavigationMenu']", function(result) {
            if(result.value) {
                console.log('----------------------------standard menu visible----------------------------');
                this
                    //.isVisible("//a/span[contains(text(), 'More')]", function(result2) {
                    .element('xpath', "//a/span[contains(text(), 'More')]", function(result2) {  
                        console.log('----------------------------checking more tab----------------------------');
                        console.log(result2);
                        // console.log(this);
                        if(result2.value && result.value.ELEMENT) {
                            console.log('----------------------------more tab visible ----------------------------');
                            this
                                .click("//a/span[contains(text(), 'More')]")
                                .click("//div[@class='subMenu']//a[contains(text(),'Integrations')]");
                                //.click("//div[@class='subMenu']//a[@title='" + MenuTitle + "')]");
                        } else {
                            console.log('----------------------------tab visible right away----------------------------');
                            this
                                .click("//a[@title='" + MenuTitle + "']")
                        }
                    })

                //a[@class='navigationMenuOverflow menuItemLink triggerLink']

                this
                //a[@class='menuItemLink'][contains(text(),'Integrations')]
                // this.api.click or this.click?
            }
            console.log('----------------------------hhhhhhhhhhhhhhhhhhhhh----------------------------');
            console.log(result.value);
            console.log(mobileMenuFound);
            console.log('----------------------------hhhhhhhhhhhhhhhhhhhhh----------------------------');
/*
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

*/
        })        
        .refreshUntilElementVisible('xpath', "//nav[@class='forceCommunityNavigationMenu']", testDuration)
        .pause(200, () => {
           this.emit('complete');
        });

    this.api.pause(30000);
    return this;
};

module.exports = goToDestination;