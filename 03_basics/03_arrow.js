//********** this in Objects ********* */
const user = {
    username: "ajay",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);    
        console.log(this);
            
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);



//+++++++++++++ this in Functions ++++++++++++++
// function chai() {
//     let username = "ajay"
//     console.log(this.username);
// }
// chai()



//++++++++ this in Function in a variable  ++++++++

// const chai = function () {
//     let username = "ajay"
//     console.log(this.username);
// }

const chai =  () => { //this function will also works as the function above. They are same but different declaration
    let username = "ajay"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {   //==> Basic Arrow Function, its also called Explicit Return Function.
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 // => Implicit Return Arrow Function
// or:
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "ajay"})


console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()