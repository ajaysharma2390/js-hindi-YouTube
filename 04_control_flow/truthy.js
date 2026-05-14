const userEmail = []

if(userEmail) {
    console.log("Got User Email");    
}
else {
    console.log("Don't have user Email");    
}


// falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values:
// "0", 'false', " ", [], {}, function(){}

//********** we are checking for empty array *********** */
// if(userEmail.length === 0) {
//     console.log("Array is empty");    
// }


// ******* now similarly as empty array above, we will be checking now for empty object ******
const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");    
}


// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 25

console.log(val1);



// Ternary Operator:

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")