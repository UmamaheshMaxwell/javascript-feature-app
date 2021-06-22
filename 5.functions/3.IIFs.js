// Immediately Invoked functions

(function (message){
    console.log(message)
})("Hello World");


var display = (function (message){
                return message
              })("Hello World")

console.log(display);

var name ='Hey'
console.log(name);

(function hello(){  
     var value = 8; 
     var name ="hello"
    console.log(name, value)
})()

function test(){
    name="uma"
    console.log(name)
}

test()

