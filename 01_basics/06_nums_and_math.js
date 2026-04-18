const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.7572

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++************ Maths ***********+++++++++++++/

// console.log(Math);
// console.log(Math.abs(-4)); //-->to change the sign to positive
// console.log(Math.round(4.6)); //-->to round off the values
// console.log(Math.ceil(4.9)); //-->to round off the values
// console.log(Math.floor(4.5)); //-->to round off the values

// console.log(Math.min(4, 3, 6, 2, 8, 7));
// console.log(Math.max(4, 3, 6, 2, 8, 7));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //--> bit confusing, so study again.