// Immediately Invoked Function Expression (IIFE)


(function chai(){
    //named IIFE as it has a name "chai"
    console.log(`DB Connected`);    
})(); // => here we added ";" explicitely so that the second code could run, because iife does not know where to stop.

//by using Arrow:
( (name) => { //here we have also added parameter in Simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})(`ajay`) //here we passed the arguements too
