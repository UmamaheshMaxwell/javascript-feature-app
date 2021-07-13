/*
    * Spread Operator (...) 
*/

const odd =[1,3,5]

//const combined = [2,4,6, ...odd]

const combined = [...odd, 2,4,6]
console.log(combined)

/*
    * Rest Operator (...) 
*/

function display(a, b, ...args){
    console.log(args)
}

display(1,2,3,4,5,6)