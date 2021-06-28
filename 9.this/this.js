// 'use strict'

console.log(this)


var ashar ="name"
var agowtham ="anothername"
var gowtham="his name"
var madhu="another one"
var uma="he is another guy"

function sample(){
    console.log(this)
}

sample()

var b = function (){
    console.log(this)
}

b()

function a(){
    console.log(this)
    this.newVariable = "hello"
}
a()

console.log(newVariable)

var c = {
    name: 'uma',   
    log: function(){  
        var self = this;
        
        self.name ="Mahesh"
        console.log(self)

        var setName = function(newName){
            self.name = newName
            console.log(self)
        }

        setName('updated again')
        console.log(self)
    }
}

c.log()

