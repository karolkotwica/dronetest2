module.exports = {
  tags: ['google'],
  'Demo test Google' : function (client) {
        console.log('test1 jest = ' + client.globals.username);
        console.log('test2 jest = ' + client.globals.pass);
        console.log('test3 jest = ' + client.globals.test3);
  }
};