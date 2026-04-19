const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);  //=>this is not a good practice as it adds the array into the array as an element


//concate method
// const allHeroes = marvel_heroes.concat(dc_heroes) // This Concate method gives a new array
// console.log(allHeroes)


// Spread operator
const all_new_heroes = [...marvel_heroes, ...dc_heroes] //=> This feature make each element as individuals by spreading them out
console.log(all_new_heroes);

//Flat method
const another_Arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const usableAnotherArr = another_Arr.flat(Infinity)
console.log(usableAnotherArr);


//Array.isArray() & Array.from()
console.log(Array.isArray("Ajay")) // => will give true or false
console.log(Array.from("Ajay")) // => will make an array of anything in string
console.log(Array.from({name : "Ajay"})) //Interesting Case for interview


//Array.of() => add multiple set of elements to make an array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
