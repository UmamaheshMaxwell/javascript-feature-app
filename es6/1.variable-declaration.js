/*
    ? var - if function scoped
    ? let, const  - block scoped 
*/

//Function Scoped 
function sample(){
    var color = "blue"
    console.log(`color inside the function: `, color)
    if(true){
        var foo="hello"
    }
    console.log(foo)
}
sample()
//console.log(`color outside the function: ` , color)


/* Block Scoped

    ? let value can be re-assigned
    ? const value can't be re-assigned , 
    ? only exception is objet data type
*/
function display(){
    if(true){
        var name ="scott";
        let city ="boston"
        const state ="MA"
    
        console.log(name)
        console.log(city)
        console.log(state)
    }
    
    console.log(name)
    console.log(city)
    console.log(state)
}
//display()

//var outside of a for-loop
for(var i=0; i<3; i++){
    console.log(i)
}
console.log(`Value of i is :`, i)

//let ouside of a for-loop

for(let i=0; i<3; i++){
    console.log(i)
}
console.log(`Value of i is :`, i)

//Re-Defining let

var a =1;
var a =2;

let b =3 + a

   b = 25 
   b = b + b
   console.log(b)

const PI = 3.14

     // PI=4.35 Not Valid

console.log(PI)

const data =[1,2,3, 4]
data.push(4)
//data = [1,2,3, 4] not valid
console.log(data)

const obj ={name: 'uma', city: 'hyd'}

obj.age =39;
obj.country ='India'
obj.city="Bengaluru"

// obj = {state: 'TS'} not valid
console.log(obj)

function redefine(){
    let foo=1;
    foo=10;

    //let foo =101 Never do this
    console.log(foo)
}

//redefine()

// let firstName = "Hey"
// var firstName = "Hello"

const total = 0;

//total  = total + 1
console.log(total)

let x;
x =0;

console.log(x)



let c;
let a =5;
let b =6;
c = a+b;
console.log(c)


let sum;
sum = sum + 1
console.log(sum)