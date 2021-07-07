/*
    ? Revealing Module Pattern 
*/
var Module=(function(){
    var privateMethod = function(){
        return 'This is private method'
    }

    var someMethod = function(){
        return "This is somemethod"
    }

    var anotherMethod = function(){
        return "This is another method"
    }

    return {
        method1: someMethod,
        method2: anotherMethod
    }
})()

console.log(Module.method1())