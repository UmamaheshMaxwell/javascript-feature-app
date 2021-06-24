var person = Object.create(null)

person.firstName ="Tuan"
person.lastName="bui"
person.address = {};
person.address.street= "1st Main"
person.address.state = "Telangana"
person.address.city = "Hyderabad"
person.getFullName = function (){
    return person.firstName + ' ' + 
           person.lastName + ' ' 
}

console.log(person)
console.log(person.getFullName())

var obj = {
    name:'johngalt',
    message: 'who is johngalt ?'
};

var person1 = Object.create(obj)
console.log(person1)
console.log(person1.name)
console.log(person1.message)

var person2 = Object.create({name: 'Ayn Rand',book: 'Atlas Shurgged'})
console.log(person2)
console.log(person2.name)
console.log(person2.book)
