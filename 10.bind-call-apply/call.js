var person1 = {firstname: 'ashar', lastName:'alam'}
var person2 = {firstname: 'Gowtham', lastName:'man'}
var person3 = {firstname: 'Madhu', lastName:'M'}

function getname(message, city){
    return message + ' to ' + city + this.firstname + ' ' + this.lastName
}


var data1 = getname.call(person1, 'Welcome' , 'Hyd ', 'Hello', 'hey')
console.log(data1)

var data2 = getname.call(person2, 'Welcome' , 'Hyd ')
console.log(data2)

var data3 = getname.call(person3, 'Welcome' , 'Hyd ')
console.log(data3)
