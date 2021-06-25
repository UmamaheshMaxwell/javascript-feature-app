var items = ["chair", "bench", "pad", "laptop"]
console.log(items)

// using for loop
console.log('******** Using For********');
for(var i=0; i<items.length; i++){
    console.log(i, items.length , items[i])
}

// using for and in 
console.log('******** Using For .. in ********');
for(var i in items.slice(0,3)){
    console.log(items[i])
}

// using foreach 
console.log('******** Using Foreach********');
items.slice(1,4).forEach(function(item, index){
        console.log(index)
        console.log(item)
})

// var list =[]
// var itemsValue = ""
// for(var i=0; i<items.length; i++){
//     console.log(i, items.length , items[i])
//     list.push(items[i])  
//     itemsValue = itemsValue + ' ' +  items[i]
// }
// console.log(itemsValue)
// console.log(list)
var value=3000;

//for(var i=0; i<1500 ; i++)
if(1==1){
    console.log('Hello')
}

var newIetms1 =  []

newIetms1 = items.map(function(item, index){
    return item + '_' + index
})

console.log(newIetms1)

var newIetms2 =  []

newIetms2 = items.forEach(function(item, index)  {
    return item + '_' + index
});

console.log(newIetms2)

var values = ["red", "yellow", "blue"];

for(var i in values) {

    values[i] =  '_1'
}

console.log(values)

for(var i in values)[
    console.log(values[i])
]