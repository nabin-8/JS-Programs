//In JavaScript You should master
//1.Objects
//2.Events

//You can Declare Objects with 2Types
//1.LIterals
//2.Constructor
//singleton
//If you declare object with Literals singleton not created
//If you declare with constroctor singleton created

//object literals
// Object.create //With constructor
// const jsuser = {} //Object with literals
const sym1 = Symbol("key1")
const JsUser = {
    name: "Nabin",
    "full name": "Nabin Acharya", //default name,age are string or change in string =>"age": 22
    age: 22,
    [sym1]: "mykey1",
    location: "palpa",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//access object
// console.log(JsUser.lastLoginDays);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[sym1]);
// console.log(typeof (JsUser[sym1]));

// change object 
JsUser.age = "23"
console.log(JsUser);


// Object.freeze(JsUser) //freez the user
JsUser.age = "18"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js User");

}

JsUser.greetingTwo = function () {
    console.log(`Hello Js User,${this.name}`);

}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());