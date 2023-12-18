
// In javaScript, datatypes refer to what type/kind of value is/can be hold by a variable
// JavaScript is dynamically typed programming language, which means the value hold by a variable can be changed into another datatype during runtime.

// There are two major classification of datatypes in javaScript. they are:
// 1.Primitive Datatypes
// 2.Non-premitive datatype

//
//DataTypes in
/**JavaScript has 8 Datatypes

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Nan

//1.string
// let str1 = 'Hello'
// let str2 = "123"
// let str3 = ` true`
// console.log(typeof (str1)); //Output
// console.log(typeof (str2));
// console.log(typeof (str3));

//2.Number
// let num1 = 100
// let num2 = 10.9
// console.log(typeof (num1));
// console.log(typeof (num2));

//3.Boolean
// let bol1 = true;
// let bol2 = false;
// console.log(typeof (bol1));
// console.log(typeof (bol2));

//4.Undefine
// let x;
// let y;
// console.log(typeof (x));
// console.log(typeof (y));

//5.NULL
// it is empty value

//6.Symbol
//Symbol makes each variable unique
// let num3 = Symbol(10);
// let num4 = Symbol(10);
// console.log(typeof (num3));
// console.log(typeof (num4));
// console.log(num3 === num4);

//7.BigInt
// let num5 = 10n;
// console.log(typeof (num5));


//Definations of primitive datatypes
/*1. Number: Number data type in javascript can be used to hold decimal values as well as values without decimals.

2. String: The string data type in javascript represents a sequence of characters that are surrounded by single or double quotes.

string output

3. Undefined: The meaning of undefined is ‘value is not assigned’.
4. Boolean: The boolean data type can accept only two values i.e. true and false.
5. Null: This data type can hold only one possible value that is null.

6. BigInt: This data type can represent numbers greater than 253-1 which helps to perform operations on large numbers. The number is specified by writing ‘n’ at the end of the value.

7. Symbol: This data type is used to create objects which will always be unique. these objects can be created using Symbol constructor.*/



//Ii```````` Non-primitive Datatype /Reference Datatype ```````````
//1)Array
// let arr1 = [1, 2, 3, 4, 5];
// let array2 = [1, 'hello', true, null, undefined, Symbol(3), 15n, ['a', 'b', 3], { a: 1, b: 1 }];
// console.log(arr1);
// console.log(array2);
// console.log(array2[7]);

// let stepswalkedInAWeek = [500, 7500, 6300, 7530, 9500, 7600, 800];
// console.log(stepswalkedInAWeek);


//2)object

// let obj1 = {
//     firstName: "Ram",
//     lastName: "Thapa",
//     age: 35,
//     City: "New York City",
//     isMarried: true,
//     stepwise: [500, 4500, 600, 700, 800, 900]
// }
// console.log(obj1);
//````````````````Nested Object Example`````````
// let bio = {
//     firstName: "Nabin",
//     lastName: "Acharya",
//     age: 21,
//     sex: "Male",
//     address: {
//         City: "Kathmandu",
//         Country: "Nepal",
//         PostCode: 44600
//     },
//     isMarried: false,

// }
// console.log(bio);


// var z = 10;
// var b = z;
// z = 9;
// console.log(z)
// console.log(b)

// const x = 10;
// const y = x;
// x = 9;
// console.log(x)
// console.log(y)

// let array1 = [1, 2, 3]
// let array2 = array1
// array2.push(5, 6)

// console.log(array1)
// console.log(array2)
//Non-Premetive dataTypes are  stored in Heap Memory
// let obj1 = {
//     a: 1,
//     b: 2
// }            //This wrong way to copy object

// let obj2 = obj1
// obj2.nabin = 3
// console.log(obj1)
// console.log(obj2)

//Right way to copy array is
// let array1 = [1, 2, 3]
// let array2 = [...array1]
// array2.push(5, 6)
// console.log(array1)
// console.log(array2)

//Object
let obj1 = {
    firstName: "Ram",
    lastName: "Thapa",
    age: 35,
    City: "New York City", //Right way to copy objec
    isMarried: true,
    stepwise: [500, 4500, 600]
}

let obj2 = { ...obj1 }
Object.assign(obj2, { myname: "Nabin" })
console.log(obj1)
console.log(obj2)