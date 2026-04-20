// singleTon: ==> this method also known as in which object is created using constructor.
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Invincible",
    "full name" : "Invincible Sharma",
    [mySym] : "mykey1", // => only way to define symbol in an object
    age : 18,
    location : "NCR",
    email : "invincible@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); // => only way to access full name, [] notation is also important.
// console.log(JsUser[mySym]);
// console.log(typeof mySym);

JsUser.email = "ajay@google.com"
// Object.freeze(JsUser)
JsUser.email = "ajayINVI@google.com"
// console.log([JsUser]);

JsUser.greeting = function() {
    console.log("Hello JS user");    
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);    // this. keyword gives all the properties of the current object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
