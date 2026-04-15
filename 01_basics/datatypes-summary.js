// Primitive Datatype:

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3423555223835327474n




//Non Primitive/ Reference Datatype:

// Array, Objects, Functions

const heros = ["shaktiman", "ironman", "ninja hattori"];

let myObj = {
    name: "Ajay",
    age: 24,
    role: "SDE",
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof bigInt);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof outsideTemp);
console.log(typeof id);
console.log(typeof userEmail);

// Study link for typeof => https://262.ecma-international.org/5.1/#sec-11.4.3