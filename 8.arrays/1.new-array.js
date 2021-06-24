var people = new Array(3)
people[0] = 1234
people[1] = "Uma"
//people[2] = "Mahesh"
people[3] = true
people[6] = {}
console.log(people)

var fruits = new Array("Oranges", "Apple", "Banana", "Guava")
console.log(fruits)

var vegetables = new Array("Potato", "Tomato", "Brinjal", "Drunstick")
console.log(vegetables)

// var allItems = new Array(vegetables + fruits);
// console.log(allItems, typeof allItems)

var getAllItems = fruits.concat(vegetables)
                        .concat(["uma", "hello"])
                        .concat([1,2,3])
console.log(getAllItems)


var movies = ["Avatar", "Good Will Hunting", "Vanilla Sky", "MARS"]

var movieString = movies.join(",")
console.log(movieString)

var movieSplit = movieString.split(',')
console.log(movieSplit)