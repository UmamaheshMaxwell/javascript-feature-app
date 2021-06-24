function Student(firstName, lastName){
    this.fname = firstName;
    this.lname = lastName;
    this.fullName = function(){
        return this.fname + ' ' + this.lname
    }
}

// Student.prototype.fullName = function(){
//     return this.fname + ' ' + this.lname
// }

var student1 = new Student('Scott', 'Deastnick')
console.log(student1)
console.log(student1.fname)
console.log(student1.lname)
console.log(student1.fullName())

var student2 = new Student('Adam', 'Colson')
console.log(student2)

var atudent3 = new Student('Tuan', 'Bui')
console.log(atudent3)
