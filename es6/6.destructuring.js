/*
    * Destructuring 
*/

let arr = ["Scott", "Adam", "Tuan", "Uma"]

let [name1, name2, name3, name4] = arr;

console.log(name1, name2, name3, name4)

/*
   ! Split()
*/

let [firstName, lastName] = "John Galt".split(' ')

console.log(firstName, lastName)

let [fname, , title] = ["Uma", "Mahesh", "Mr."]

console.log(title) // Mr.


/*
 ! Using Objects
*/

let user ={
    name: 'John',
    age: 30
}

let {name, age} = user;

console.log(name, age)
