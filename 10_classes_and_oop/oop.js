const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


//+++++++++++++++++ Constructor Function +++++++++++++++++++++

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this // this return is implicitely done by the constructor function, so we can omit it.
}

//things "new" keyword does:
//1. creates an empty object
//2. constructor function is called because of the new keyword, and wraps the arguments in the constructor function.
//3. the arguments we have written into the function are assignned into variables using this keyword.
//4. the object is returned by default, so we can omit the return statement in the constructor function.
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

//study about  operator in js.