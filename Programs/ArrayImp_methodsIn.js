// some more Array Methods
// map: ->Creates a new array with the results of some operation.The value its callback returns are used to from new array

// arr.map(callbackFnx(value,index,array))
// let nums=[67,52,39]
// let newArr=nums.map((val)=>{
//     return val*2;
// });
// console.log(newArr);


//Filter method in js
// filter creates a new array of elements that give true for a condition/filter.
// let arr=[1,2,3,4,5,6,7]
// let evenarray=arr.filter((val)=>{
//     return val%2==0;
// });
// console.log(evenarray);



// Reduce method in js 
// reduce performs some operations and reduces the array to a single value.it returns that single value.

// arr=[1,2,3,4];
// const output=arr.reduce((res,curr)=>{
//     return res+curr; 
// });

// console.log(output);
// lets understand
// res=1 and curr=2 1+2=3
// res=3 and curr=3 3+3=6
// res=4 and curr=6 4+6=6
// output is: 10

// find largest number
arr=[22,58,6,9,41,25,87,69]
const output=arr.reduce((res,curr)=>{
    return res>curr?res:curr; 
});

console.log(output);

// pratice
let marks=[78,95,85,93,97,25,44,65]
let scoremarks=marks.filter((val)=>{
    return val>90;
});

console.log(scoremarks);