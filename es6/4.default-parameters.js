/*
    * Default Parameters 
*/

function say(message){
    console.log(message)
}

//say()

/*
    ! ES5 way of fixing 
*/

function say(message){
    message = typeof message !== 'undefined' ? message : 'hi'
    console.log(message)
}




/*
    ! ES6 way of fixing 
*/

function say(message="EF6 Default value"){
    console.log(message)
}


say()