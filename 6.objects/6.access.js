var person = {
    firstName: 'Scott',
    lastName: 'Desatnick',
    city: 'Boston'
}

person.age = 45;

console.log(person)

/*
 ? Object.preventExtensions()
 * we can edit and we can delete
 * but can't add new properties
*/

var preventObject = {
    name: 'Gowtham',
    city: 'Hyderabad',
    age: 25
}

Object.preventExtensions(preventObject)

preventObject.email="gowtha@ef.com"
preventObject.name = "Kumar"
delete preventObject.age;

console.log(preventObject)

/* 
 ? Object.seal()
 * we can edit but we can't add 
 * and delete existing properties
*/

var sealObject = {
    name: 'Alam',
    city: 'Chennai',
    age:25
}

Object.seal(sealObject)

sealObject.email ="alam@abc.com"
sealObject.name = "Ashar"
delete sealObject.age

console.log(sealObject)

/*
 ? Object.freeze()
  * We can't edit, delete or add properties 
*/

var freezeObject = {
    name: 'Madhu',
    city: 'Bangalore',
    age: 25,
    address : {
        state: 'KA',
        street:'Jayanagar 7th block'
    }
}

Object.freeze(freezeObject)
Object.freeze(freezeObject.address)

freezeObject.email ="madhu@cc.com"
freezeObject.name = "Kumar"
delete freezeObject.age;

freezeObject.address.street ="Vijaya Nagar 1st Main"

console.log(freezeObject)