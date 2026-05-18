// => to iterate over Objects, we have to use "forin loop"
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}



// => using forin loop for array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) { //=> forin loop gives keys by default. so we have to write "programming[key]" to print the values.
    //console.log(programming[key]);
}
// ++++ key insight ++++ :- Objects were made because keys's of arrays are by default numbers starting with '0' but in Objects we can define keys ourselves.



// ++++ trying to use forin loop over map.++++

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
// -> map is not iteratable so here nothing will be printed.