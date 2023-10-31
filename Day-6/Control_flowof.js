//Control-Flow of Javascript
// const isUserloggedIn = true

// if (isUserloggedIn) {
//     console.log("hello");
// }

// Logical Condition <, >, >=, <=, !=, ===
const temperature = 51

// if (temperature === 41) {
//     console.log("41 Executed");
// } else {
//     console.log("Not Executed");
// }

const score = 200
if (score > 100) {
    const power = "fly"
    // var power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);

const balance = 1000
if (balance > 500) console.log("test");


//Nesting if elesif else
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userloggedIn = true
const debitCard = true
const loggedInfromGoogle = true
const logedInFromEmail = true

// if (userloggedIn && debitCard) {
//     console.log("Allow to buy course");
// }

// if (loggedInfromGoogle || logedInFromEmail) {
//     console.log("Allow to Login");
// }


//Switch Case
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("Chose from 1-4");
        break;
}


//Truthy Value
const userEmail = []

if (userEmail) {
    console.log("got user email");
} else {
    console.log("Don't get user email");
}

//Falsy Values
// false, 0,-0,BigInt 0n, "", null, undefined, NaN

//truthy Values
//"0", 'false', " ", [], {}, function(){}

//check array
if (userEmail.length === 0) {
    console.log("array is empty");
}

//check object
const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");
}

//quick points
/**
 * false==0 //true
 * false=='' //true
 * 0=='' //true
 */


//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1=null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


//Terniary Operator
//Condition ? true: false


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");