var util = require('util');
var events = require('events');

// Waits for N rounds for some element to appear
function refreshUntilElementVisible() {
    events.EventEmitter.call(this);
    this.currentRound = 0;
}

// Node event emitter style
util.inherits(refreshUntilElementVisible, events.EventEmitter);

/**
 * The last = {} bit just before the parameter signature closes means that if nothing gets passed in for this parameter,
 * we’re going to use an empty object as the default if no argument is passed in.
 * 
 * @arg {string} element
 * @arg {object} options
 * @param {number} options.maxRounds Number of times to refresh before we fail. Default = 10 rounds.
 * @param {number} options.timeout Timeout between refreshes in ms. Default = 30 seconds.
 */

refreshUntilElementVisible.prototype.command = function(selectorType, elementValue, {maxRounds = 10, timeout = 30000} = {}) {
    
    this.api.element(selectorType, elementValue, (result) => {
        if (result.status == 0) {
            this.api.assert.ok(result, `Element visible after ${this.currentRound} rounds.`);
            this.emit('complete');
        } else if (this.currentRound < maxRounds) {
            console.log(`ROUND: ${this.currentRound} - ACTUAL: ${result}, EXPECTED: true`);
            this.api.pause(timeout)
                .pause(1000) // Can replace with waitUntilElementVisible
                .perform((browser, done) => {
                    this.currentRound++;             
                    // Recursively call our command if we haven't found the element
                    this.command(selectorType, elementValue, {maxRounds, timeout});
                    done();
                })
        } else {
            this.api.assert.fail(result, true, `Element not visible after ${maxRounds} rounds.`);
            this.emit('complete');
        }
    })

    return this;
};

module.exports = refreshUntilElementVisible;