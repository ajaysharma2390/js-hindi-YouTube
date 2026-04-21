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



// console.log(tinderUser); // we will use methods of (Object.) below, like obtaining keys, values
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// gives boolean value.




// ******************* Object Destructuring ************************

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// course.courseInstructor //=> instead of using this statement various times, we can do something like below:

// const {courseInstructor} = course //we can extract courseInstructor from course
// // console.log(courseInstructor); // here our work reduce after extracting the values

const {courseInstructor: instructor} = course // if we think the name is too long, then we can also change the name for calling
console.log(instructor);

// adding one react topic for destructuring:
const navbar = ({company}) => {  // instead of writing const navbar = (props.company) => {___} (where props is some object name), we are wrting ({company}) => {___}

}

navbar(company = "invincible")


// ************touching APIs:************

//APIs in past time, came in XML format but now they come in JSON format which looks like below:
//object always has a name, but in JSON, this can be in form of object or array, in object, the keys and values both are strings and dont have any name.

//Object type API:

// {
//     "name": "Ajay",
//     "coursename": "js in hindi",
//     "price": "free"
// }
// example for the JSON, visit link: api.github.com/users/hiteshchoudhary

//Array type API:

[
    {},
    {},
    {}
]
// to have an example of API like these, visit randomuserme -> API section and then can understand through any JSON formatter to have a clean look.