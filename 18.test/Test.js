var a  =10;
var b =a;
a =20;

console.log(a)
console.log(b)

var x =[1,2,3]
var y = x;
x.push(4)

console.log(x)
console.log(y)

var m = [1,2,3]
var n = m;
m= [1,2,3,4]

console.log(m)
console.log(n)

var data1 = {a:10, b:20}
var data2 = data1;
data1.c=30;

console.log(data1)
console.log(data2)

var is_admin= true;
var is_not_admin = is_admin
is_admin = false

console.log(is_admin)
console.log(is_not_admin)

var name ="name" + 1 + 2
console.log(name)

var value = "hello" + {name: 'Hello'} // This wrong

//This way we can see both string and obejct
//var value = `Hello {name: 'Hello', data: {name:'uma}} ` 

console.log(value)

var newName = 1 + 2 + "Uma" + 3 +4
console.log(newName)

var output1 = (function(x){
    delete x
    return x;
})(0)

console.log('Output :', output1)

var output2 = (function(val){
    delete val.x
    return val.x;
})({x:0})

console.log('Output :', output2)

console.log(multiply(2)(3)(4))

function multiply(x){
    return function(y){
        return function(z){
            return x*y*z
        }
    }
}

var array = ['a', 'b', 'c', 'd', 'e', 'f']

console.log(array)

//1st way 
for(var i in array){
    delete array[i]
}

//2nd Way 
while(array.length) {
    array.pop()
}

//3rd Way 
array =[]

//4th way
array.length =0;

//5th way 
array.splice(0, array.length)

console.log(array)

console.log(evenOrOdd(3))
console.log(evenOrOdd(6))
console.log(evenOrOdd(7))

function evenOrOdd(value){
    return value%2 == 0
}

console.log(extnExtractor('resume.doc'))
console.log(extnExtractor('bangalore.txt'))
console.log(extnExtractor('notepad'))

function extnExtractor(filename){
    return filename.split('.')[1] ? 
           filename.split('.')[1] : false
}

var a =10;
var b =20;

var c = a>b ? a : b;
console.log(c)

console.table([
    {name: 'uma', city:'hyderbad'},
    {name: 'madhu', city:'bengaluru'},
    {name: 'gowtham', city:'mumabi'},
    {name: 'alam', city:'pune', email:'alam@ef.com'},
])

var obj ={name: 'uma', city:'hyd', email: 'uma@ef.com'}

console.log(obj)

console.log(Object.keys(obj))
console.log(Object.values(obj))

for(var item of Object.keys(obj)){
    if(item === 'name'){
        console.log(`Yes there is name key`)
    }
}

console.log("Hello %s your Id is %i your details :%o", "Uma", 1234, {name:'umesh'})

setTimeout(function(){
    console.log('Hello')
}, 5000)

setInterval(function(){
    console.log('Hey you ?')
}, 2000);