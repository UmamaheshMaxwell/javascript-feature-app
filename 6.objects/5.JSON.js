var person1 = {firstName: 'John', lastName: 'Galt'}
console.log(person1, typeof person1)

var person2 = {"firstName": 'Ayn', "lastName": 'Rand'}
console.log(person2, typeof person2)

var person3 = JSON.stringify(person2)
console.log(person3, typeof person3)


var person4 = JSON.parse('{"firstName":"Ayn","lastName":"Rand"}')
console.log(person4, typeof person4)