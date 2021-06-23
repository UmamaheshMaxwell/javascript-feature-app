var person = {}; // Object Literal Syntax

person.firstName ="Adam"
person.lastName="Colson"
person.address = {};
person.address.street= "1st Main"
person.address.state = "Karnataka"
person.address.city = "Bengaluru"
person.getFullName = function (){
    return person.firstName + ' ' + 
           person.lastName + ' ' +
           person.address.state
}

console.log(person)
console.log(person.getFullName())

// other way 
var phone ="123456789"
var student = {
    firstName: 'Tuan',
    lastName: 'Bui',
    getFullName: function (){
        return `Student Details : ${student.firstName} ${student.lastName} ${phone}`
    }
}

console.log(student)
console.log(student.getFullName())

