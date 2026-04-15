const name = "invincible"
const repoCount = 2

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // => This method is called String Interpolation.

const gameName = new String('ajay-Sh-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 4) //=> negative value will be ignored here
console.log(newString);

const anotherString = gameName.slice(-6, 4) //=> negative value will start slicing from back
console.log(anotherString);

const newStringOne = "    ajay    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https//hitesh.com/hitesh%20chaudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))
console.log(url.includes('ajay'))

console.log(gameName.split('-'));