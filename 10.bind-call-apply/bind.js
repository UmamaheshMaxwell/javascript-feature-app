var person1 = {firstname: 'ashar', lastName:'alam'}
var person2 = {firstname: 'Gowtham', lastName:'man'}
var person3 = {firstname: 'Madhu', lastName:'M'}


function getname(message, city){
    return message + ' to ' + city + this.firstname + ' ' + this.lastName
}

var fullname1 = getname.bind(person1)
console.log(fullname1('Welcome' , 'Hyd '))

var fullname2 = getname.bind(person2)
console.log(fullname2('Welcome' , 'Hyd '))

var fullname3 = getname.bind(person3)
console.log(fullname3('Welcome' , 'Hyd '))
