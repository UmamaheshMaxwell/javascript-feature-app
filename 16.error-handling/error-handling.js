/*
    ? try-catch-finally
*/

try{
    // code that may throw errors
} catch(ex){
    // code will be executed if there is an error 
} finally {
    // Code to be executed regardless of an error 
}

try {
    var output = getMessage('Hello', 'Uma')
} catch(ex){
    console.log(ex)
} finally {
    console.log('This will get executed always !!!')
}

// throw

try {
    throw "Error Occured"
} catch(ex){
    console.log(ex)
}

try {
    throw { number: 101,  message: 'Duplicate Id'}
} catch(ex){
    console.log(ex.number, ex.message)
}


try {
    throw "Error Occured"
} catch(ex){
    //throw console.log(ex)
} 

try {
    var array =[2,5,3,7,4,8]
    var addNumber=0;
    for(var i=0; i<8; i++){
        if(typeof array[i] === "number"){
            addNumber = addNumber + array[i]
        }
    }
    console.log(addNumber)

} catch(ex){

}
