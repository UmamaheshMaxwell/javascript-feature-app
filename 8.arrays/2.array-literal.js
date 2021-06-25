//var data = [null, undefined, , 1];

var data = ["C#", "JavaScript", "Python"] // array literal 

data.push("PHP") 
data.push("Go")
data.push("SQL Server")

data.unshift("MongoDB")
data.unshift("Postgress DB")

var numbers = [1,2,3,4,5]

numbers.push(6)
numbers.unshift(0)

numbers.shift()
numbers.pop()
console.log(numbers)


// data[3]="PHP"
// data[4]="Go"

// // var length = data.length //[0 to 4] 5
// // if(data.length == length){
//     data[data.length]="SQL Server"
// //}
console.log(data)

var months = ['Jan', 'March', 'April', 'June'];
months.splice(2, 1, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]