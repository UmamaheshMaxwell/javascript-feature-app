/*
    ? Anonymous object literal 
*/
var Module =(function(){

    var privateMethod = function(){

    }

    return {
        publicMethodOne:  function(){
            return 'This is public method One'
        },
        publicMethodTwo:  function(){
            return 'This is public method Two'
        },
        publicMethodThree:  function(){
            return 'This is public method Three'
        }
    }

})()

console.log(Module)
console.log(Module.publicMethodOne())
console.log(Module.publicMethodTwo())
console.log(Module.publicMethodThree())
