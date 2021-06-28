var person1 = {firstname: 'ashar', lastName:'alam'}
var person2 = {firstname: 'Gowtham', lastName:'man'}
var person3 = {firstname: 'Madhu', lastName:'M'}


function getname(message, city){
    return message + ' to ' + city + this.firstname + ' ' + this.lastName
}


var content1 = getname.apply(person1, ['Welcome' , 'Hyd ', 'Hello', 'hey'])
console.log(content1)

var content2 = getname.apply(person2, ['Welcome' , 'Hyd '])
console.log(content2)

var content3 = getname.apply(person3, ['Welcome' , 'Hyd '])
console.log(content3)