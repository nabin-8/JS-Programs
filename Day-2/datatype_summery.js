// #Primitive Datatype
/**
 * 7Types:
 * 1.String
 * 2.Number
 * 3.Boolean
 * 4.Null
 * 5.Undefined
 * 6.Symbol
 * 7.BigInt
 */

const name = "Nabin" //String
const score = 100 //Number
const scoreValue = 100.3 //Also Number

const isLoggedIn = false //Boolean
const outsideTemp = null //null not empty or 0
let userEmail; //Defult is Undefine

const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id === anotherid); //they are unique

const bigNumber = 1651651651651651n

// #Reference (Non Primitive)
/**
 * 1.Array
 * 2.Object
 * 3.Function
 */

const languages = ["Nepali", "English", "Chines", "Japnese"]; //Array

let myObj = {
    name: "Nabin", //Object
    age: 22
}

function myFunction() {
    console.log("Hello World");
}

//Typeof
console.log(typeof (bigNumber))
//Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
//JavaScript is Dynamical Typed Programming language


//*************************************************************************** */
//Stack and Heap Memory in JavaScript
//Stack(Primitive),Heap(Non-Primitive) Store in memory

let firstname = "Nabin"
let secondname = firstname
secondname = "KHUM"
console.log(firstname);
console.log(secondname);

let userOne = {
    email: "nabin@gmail.com",
    esawa: "46565456"
}

let userTwo = userOne
console.log(userOne);
console.log(userTwo);
userTwo.email = "khum@gmail.com"
console.log(userOne);
console.log(userTwo);