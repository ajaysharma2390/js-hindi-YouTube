var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER : ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


// **************Nested Scope**************

function one() {
    const username = "ajay"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}

// one()


if(true) {
    const username = "ajay"
    if(username == "ajay") {
        const website = " youtube"
        // console.log(username + website);   
    }
    // console.log(website);    
}
// console.log(username);



//++++++++++++++ Interesting ++++++++++++++

console.log(addone(5)) //=> This will run and give the result

function addone(num) {
    return num + 1
}


addTwo(5) //=> This will give error for accessing before declaration as the function is holding inside a variable
const addTwo = function(num) {
    return num + 2
}
