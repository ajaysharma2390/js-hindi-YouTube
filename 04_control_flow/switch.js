// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break; // => if we dont write "break" keyword, then below all the lines will also get executed except "Default"
    case "april":
        console.log("april");
        break; 

    default: // if nothing above is executed, then it will get executed.
        console.log("default case match");
        break;
}