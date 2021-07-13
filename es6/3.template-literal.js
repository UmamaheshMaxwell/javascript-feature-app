/*
    * Template Literals 
*/

let simple = 'This is a string'

simple = `This is string using template literal`

console.log(simple)

let str = `Template literal in ES6 `

console.log(str)
console.log(str.length)
console.log(typeof str)

/*
  ! using single quote
*/

let anotherString = `Here's a template literal `

console.log(anotherString)

/*
  ! string containing backtick
*/

let strWithBackTick = `Template literals using backticks \` instead of quotes`

console.log(strWithBackTick)


/*
  ! Multiline Strings (Prior to ES6)
*/

var msg = 'Multiple \n\ string \n\ using es5'

console.log(msg)

/*
  ! Multiline Strings (using ES6)
*/

let p = `This text           
can span 
multipe lines`

console.log(p)

/*
  ! Varibale and expression substitutions
*/

let firstName = 'John',
    lastName = 'Galt'
    
let greeting = `Hello ${firstName} ${lastName}`
console.log(greeting)

