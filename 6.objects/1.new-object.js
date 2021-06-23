var person = new Object();

person["id"] = 1
person['firstName'] = "Scott"
person['lastName'] = "Desatnick"
var uma = new Object();
person["address"] = uma
person["address"]["street"] = uma
person["address"]["street"]["state"]="some state"
person["address"]["state"] ="Telangana"
person["address"]["city"] = "Hyderabad"
person["skills"]=["C#", "JavaScript", "Python"]
uma["planet"] ="Earth"
console.log(uma["planet"])
console.log(person["address"]["street"])

var firstNameProperty = "firstName";
console.log(person[firstNameProperty])

console.log(person)
console.log(typeof person["address"])
console.log(typeof person["skills"])
console.log(Array.isArray(person["skills"][0]))
console.log(typeof person["skills"][0])


