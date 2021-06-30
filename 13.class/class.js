function Student(){

}

/* 
?   Instance

? student1, student2 are instances 
? of Student class
 */

var student1 = new Student();
console.log(student1)

var student2 = new Student()
console.log(student2)

/* 
?   constructor
 */

var student3 = new Student() // Student() is a constructor

/* 
?   properties
 */

function Customer(firstName, lastName){
    this.fname = firstName;
    this.lname = lastName
}

var customer1 = new Customer('Uma', 'Mahesh')
console.log(customer1)

/* 
?   method
 */

function Product(name, code ){
    this.name = name
    this.code = code
}

Product.prototype.getProductDetails = function(){
    return `The Product is ${this.name} and the code is ${this.code}`
}

var product1 = new Product('Laptop', 'LPTP')
console.log(product1)
console.log(product1.getProductDetails())


function Person(){
    this.name ='John'
    this.gender = 'male'
}

Person.prototype.age = 15

var personObejct1 = new Person()
console.log(personObejct1.age)

var personObejct2 = new Person()
console.log(personObejct2.age)

