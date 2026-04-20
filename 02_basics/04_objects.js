// const tinderUser = new Object() //=> only difference is this is the singleton object.
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Ajay",
            lastname : "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj4 = {5 : "a", 6 : "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) //=> Object.assign operator is used here to copy all object into the target object like : Object.assign(target, source.....)

const obj3 = {...obj1, ...obj2} // or we can simply use spread operator to copy all the objects with ease
// console.log(obj3);


const users = [        // ==> this type of data/value usually come from database in the form of array having multiple objects
    {
        
    },
    {
        
    },
    {
        id : 1,
        email : "i@gmail.com"
    },
    {
        
    },
    {
        
    },
]

users[1].email // we use [1] because due to this, we got to know its an object and hence we are able to use dot(.) notation.
// console.log(users[2].email);



console.log(tinderUser); // we will use methods of (Object.) below, like obtaining keys, values
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));// gives boolean value.