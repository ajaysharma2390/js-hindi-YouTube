// ********************* Conversion **********************
// link to study: https://tc39.es/ecma262/multipage/abstract-operations.html

let score = "invincible"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN & the type is still => number
// true => 1; false => 0
// "Ajay" => NaN
// null => 0
// undefined => NaN & the type is still => undefined   




let isLoggedIn = "Ajay"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Ajay" => true  


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ***************************** Operations *****************************

let value = 3
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Ajay"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2" + 2);
// console.log(1 + 2 + "2");

// console.log((3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

let a = 3
let b = a++
console.log(`a:${a}, b:${b}`);
//y gets 3 (=> x) then x becomes 4

let x = 3
let y = ++x
console.log(`x:${x}, y:${y}`);
//x becomes 4 (=>incremented x) then y gets 4
// link to study pre/post increment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment