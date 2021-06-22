// Regular functions without paramaters
function getName(){
    var a =1;
    var b = 2;
    var c = a + b;
    var fullname = "john"
   
    return c + fullname;
}

var userName = getName();
console.log(userName)

// Regular functions with paramaters

function getData(number1, number2, fullname){
    var value1 =number1;
    var value2 = number2;
    var total = value1 + value2;
    var name = fullname
    return total+ name;
}

var data = getData(1, 2, "John")
console.log(data)


function display(param1, param2){
    return param1 + param2
    return
}

var displayMessage = display("uma");
console.log(displayMessage)

function isEven(number){
    return (number%2 == 0)
}

console.log(isEven(2))
console.log(isEven(3))