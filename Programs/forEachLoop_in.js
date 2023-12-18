// forEatch loop in Arrays
// arr.forEach(callBackFunction)
// callbackFunction : here, it isa function to execute for each element in the array

// A callback is a function passed as an argument to another function.

// let arr=[1,2,3,4,5,6,7]
// let city=["ktm", "butwal", "chitwan", "palpa"]

// arr.forEach(function printval(val){
//     console.log(val);
// })
// generally we use arrow-Function in for-each
// arr.forEach((val)=>{
//     console.log(val);
// })

// city.forEach((val)=>{
//     console.log(val.toUpperCase());
// });

// city.forEach((val,index,array)=>{
//     console.log(val.toUpperCase(),index,array);
// });

// note: for-each also called higher order function/method

// pratice question:
// arr.forEach((val)=>{
//     sqr=val*val;
//     console.log(`Sqr of ${val} is:${sqr}`);
// })

let nums=[67,52,39];
let calcSquare=(num)=>{
    console.log(num*num);
};
nums.forEach(calcSquare)