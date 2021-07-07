/*
    ? Stacked Locally Scoped object literal 
*/
var Module=(function(){
    var privateMethod = function(){
        return 'This is private method'
    }

    var obj ={
        publicMethod: function(){
        return 'This is public method'
        },
        someMethod: function(){
           return 'This is somemethod' 
        },
        anotherMethod: function(){
            return 'This is another method'
        }
    }

    return obj

})()

console.log(Module)