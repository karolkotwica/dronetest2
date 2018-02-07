module.exports = {
  tags: ['google'],
  'Demo test Google' : function (client) {
        console.log('test1 jest = ' + browser.globals.test1);
        console.log('test2 jest = ' + browser.globals.test2);
        console.log('test3 jest = ' + browser.globals.test3);
  }
};