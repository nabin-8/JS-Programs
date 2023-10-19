// const tinder = new Object() //singletun object
const tinder = {}  //non singleton object
// console.log(tinder);

tinder.id = "123abc"
tinder.name = "nabin"
tinder.isLoggedIn = false

// console.log(tinder);

const regularUser = { //object
    email: "some@gmail.com",
    fullName: { //another object
        userfullname: { //another object
            firstname: "nabin",
            lastname: "Acharya"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    }
]

// users[1].email
console.log(tinder);

console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('name'));
