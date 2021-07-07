/*
    ? Locally Scoped object literal 
*/
var Module=(function(){
    var privateMethod = function(){
        return 'This is private method'
    }

    var obj ={}

    obj.someMethod = function(){
        return 'This is again public method'
    }

    return obj

})()

console.log(Module)

