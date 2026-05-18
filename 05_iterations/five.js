//+++++++++ forEach loop +++++++++ =>this loop is an inbuilt method given to every array

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(  function (val) { //normal function
    // console.log(val);
    
}  )

coding.forEach(  (item) => { //arrow function
    // console.log(item);
    
}  )

//passing a function into a forEach loop

function printMe(item) {
    // console.log(item);    
}

coding.forEach(printMe)


//++++ another things of forEach loop's parameters

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);    
})


// lets discuss for this situation -> [{}, {}, {}]

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "JAVA",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach(  (objectX) => {
    console.log(objectX.languageName);
}  )