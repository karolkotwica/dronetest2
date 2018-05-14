module.exports = {
    PC_LoginToTenfold : function (client) {
        client
        .loginToTenfold()
        .useXpath()
        .refreshUntilElementVisible("class name", "home")
        .end();
    }
};  