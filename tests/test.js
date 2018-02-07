module.exports = {
  tags: ['google'],
  'Demo test Google' : function (client) {
        console.log('test1 jest = ' + client.globals.test1);
        console.log('test2 jest = ' + client.globals.test2);
        console.log('test3 jest = ' + client.globals.test3);
  }
};