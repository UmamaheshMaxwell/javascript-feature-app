var name ='Scott'

if(name=='Scott'){
    console.log('Hey Scott, how are you ?')
} else {
    console.log('Hey, seems like a different person')
}

var message="Hello"

if(message=="Hello") console.log('Yeah thats the message !!!!')


var marks = 60;

if(marks == 50) {
    console.log('Student grades have been less')
} else if (marks == 70) {
    console.log('students grades have been average')
} else if(marks == 80) {
    console.log('students grades have been better')
} else if(marks == 100) {
        console.log('students grades have been Best')
}

var total =50

if(total == 50) {
    var num = 25
    if(num == 25) {
        console.log('Hey I am inside nested if ')
    }
}

/* 
 * difference between == and ===
*/

var a ='1'

if (a === 1) {
    console.log('a is always 1')
} else {
    console.log('a ia not a number')
}

var firstName='john'
var secondName ='galt'
var age = 39

if(firstName === 'john' && secondName ==='galt' && age !== 39){
    console.log('His name is johngalt !!!')
} else {
    console.log('He is a proxy !!!')
}


var newVariable1 = 'Adam'
var newVariable2 = 'Colson'
var newVariable3 = 43

if(newVariable1==='adam' || newVariable2 ==='uma' || newVariable3 === 43){
    console.log('Welcome Adam, you are home finally')
} else {
    console.log('He is not Adam')
}


if(firstName ==='john' && (secondName === 'colson' || age === 43)){
    console.log(`Hey his name is jOhn and he is ${age}`)
} else {
    console.log('I don\'t think he is john')
}

// Backtick 

var fname= 'Tuan'
var lname= 'Bui'

console.log('fname is '+ fname + ' and lname is ' + lname)

console.log(`fname is ${fname} and lname is ${lname}`)

console.log(fname==='Tuan' && lname ==='Bui')

var x = true
var y = false


if(x) {
    console.log( 'yeah X')
} else if(y){
    console.log('yeah Y')
} else {
    console.log('not X and Y')
}

console.log(x===true || x===true && y===false)
console.log(true || true && true)


if(20 > 30) {
    console.log('I failed you !!!')
} else if(20 > 20) {
     console.log('I think you failed')
} else if (20 > 10 && 20 === 20) {
    console.log('unfortunately you have passed ')
} else if( 20 === 20) {
    console.log('seems like there is a tie')
}

if(10<20){
    console.log('Hello')
}

var data = ["red", 'blue', 'yellow']

for(var i=0; i< data.length; i++){
    if(data[i] ==='blue'){
        console.log('There is a blue')
    }
}


var name ="Umamahesh"

switch(name){
    case 'Umesh': 
        console.log('His name is Umesh')
        break;
    case 'Mahesh': 
        console.log('His name is Mahesh')
        break;
    case 'Umamahesh':
        console.log('he is Umamahesh')
        break;
    case 'Uma':
        console.log('he is Uma')
        break;
    default:
        console.log('Guys you don\'t know his name ? ')
}

var text = "";
var i;
for (i = 0; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i + "\n";
}

console.log(text)

var n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// expected output: 3