var Module=(function(){
    var privateMethod = function(){
        return 'This is private method'
    }
    return{
        publicMethod:  function(){
            return 'This is public method'
        }
    } 

})()

console.log(Module)
//console.log(Module.privateMethod())
console.log(Module.publicMethod())

