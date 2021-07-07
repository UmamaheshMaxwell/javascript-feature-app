/*
    ? Revealing Module Pattern - by Accessing private methods
*/

var Module=(function(){
    var privateMethod = function(message){
        return message
    }

    var publicMethod = function(text){
        return privateMethod(text)
    }

    return {
        method1: publicMethod
    }
})()

console.log(Module.method1('Hey am I calling private method ?'))