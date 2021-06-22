// Anonymous function without prameters
var getName =  function (){
    var a =1;
    var b = 2;
    var c = a + b;
    var name = "john"
    return c+ name;
}

var name = getName();
console.log(name)

// Anonymous function with prameters

var getData =  function(num1, num2, firstName){
    var a =num1;
    var b = num2;
    var c = a + b;
    var name = firstName
   return c + name;

}

var data = getData(1,2,"John")
console.log(data)

// function with name

// function with name
var getMessage = function display(){
    return "This is javascript tutorial"
}

var message = getMessage();
console.log(message)

// var message1 = display();
// console.log(message1)

var display = function (){
    //return "hello"
    //return 1
    //return undefined
    return null
    {
        name: 'Johngalt'
    }
}

console.log(display())

/* Example of function return values  */

function userData1(){
    return 
    {
        message: 'Hello World'
    }
}

function userData2(){
    return {
        message: 'Hello World'
    }

    // below code will not be executed 
    // as compiler will ignore all the code
    // written below return 
    return "Hello"
    return "Hey"
}

console.log(userData1())
console.log(userData2())
