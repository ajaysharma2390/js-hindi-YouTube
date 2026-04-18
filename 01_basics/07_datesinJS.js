// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(typeof(myDate));

// let myCreatedDate = new Date(2023, 0, 23)
// console.log((myCreatedDate.toString()));
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)



let myCreatedDate = new Date("01-14-2023")
// let myCreatedDate1 = new Date("2023-01-14") 
// let myCreatedDate2 = new Date("01-14-2023") 
// console.log(myCreatedDate1.toLocaleString());
// console.log(myCreatedDate2.toLocaleString());


// let myTimeStamp = Date.now()

// // console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

// (`${newDate.getDay()} and the time is `)

newDate.toLocaleDateString('default', {
    weekday: "long",
})