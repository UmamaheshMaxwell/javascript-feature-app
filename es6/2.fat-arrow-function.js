/*
    * Fat Arrow Functions 
*/

/*
  ! Fat arrow functions doesn't contain function keyword
  ! should have fat arrow between paranthesis and flower bracket
*/

let add = (a, b) => {
    return a +b;
}

console.log(add(1, 6))

let sum = (a, b) => a +b;
console.log(sum(5, 6))

/*
    ! However , uf you use the block syntax you need to 
    ! specify the 'return'  keyword
    ? () => expression   
    ? () => {retrun expression}
    ? both declarations are equal 
*/
let sub = (a, b) => {return a - b};
console.log(sub(6, 5))

/*
    * Creating IIFs using fat arrow functions
*/
var x = (() => {
    return "this is IIF using fat arrow functions"
})()

console.log(x)


let numbers1 = [4,2,6]

numbers1.sort(function(a, b){
    return a-b
})

console.log(numbers1)


let numbers2 = [4,2,6]

numbers2.sort((a, b) => {
    return a-b
})

console.log(numbers2)

/*
    ! all assignments are equal 
    ? (param) => statement
    ?  param  => statement
    ?  both are equal 
*/

let message1 = (msg) => msg + " Uma"
console.log(message1('Hello'))

let message2 = msg => msg + " Uma"
console.log(message2('Hello'))

let message3 = msg => msg 
console.log(message3('Hello'))


let names = ["Gowtham", "Alam", "Madhu"]

let lengths = names.map(name => name.length)

console.log(lengths)

// with no Pramaters
let log = () => console.log(window.document)
log()

// Line Break 
/* 
    ? This will give you syntax error  
*/
 //let multiply = (x, y)  
 //=> x*y 


 let multiply = (x, y) => 
 x*y 

console.log(multiply(2, 3))

var employee = {
    id: 1,
    greet : function(){
        setTimeout(function(){
            console.log(this.id)
        }.bind(this), 1000);
    }
}

var employee = {
    id: 1,
    greet : function(){
        var self = this;
        setTimeout(function(){
            console.log(self.id)
        }, 1000);
    }
}

var employee = {
    id: 1,
    greet : function(){
        setTimeout(() => {
            console.log(this.id)
        }, 1000);
    }
}

employee.greet()


