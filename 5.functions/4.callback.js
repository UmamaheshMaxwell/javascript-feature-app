function sample(val){
   return val()
}

var value = function(){return 1}
console.log(sample(value))

