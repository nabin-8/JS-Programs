// Array 
// It is a special non-primitive datatype. It is used to hold similar data as collection.By using array we can hold multiple data in a single variable and manipulate them

// for eg:
// let years=[2076,2077,2078,2079,2080]
// let fruits=["apple","banana","mango","cherry"]

// since javascript is a dynamically typed programming language, an array can hold multiple, value of varying datatypes.

// let example=[1,"apple",true,undefined,null,Symbol(1),10n,[1,2,3],{a:1,b:2}]

// Empty array
// let emptyArray=[];
//syntax:
//by using array literals
// Variable_type identifier=[Element1,Element2];

//By using constructor:
// Variable_type identifier = new Array(e1,e2,e3);

// let brand =new Array("Nike","Goldstar","Gucci");
// console.log(brand);

//The element of array always start at 0 index
// console.log(brand[2]);
//making an array using index
// emptyArray[0]="A";
// emptyArray[1]="b";
// emptyArray[2]="c";
// emptyArray[7]="d";
// emptyArray.push("A","B","C","D")
// console.log(emptyArray);

//This creates a thing array holes.and non existing array index returns undefined when used.

//properties and methods of array

// length property 
//In JavaScript, length is a property of an array which returns the total number of element present in array.
// console.log(fruits.length);



//Methods of Array:
//1.indexof() -->It returns the index of element passed in that method.

//If no such element is found it returns -1;
// let names=['Ram','Sita','Sam', 'Hari','Rita','Gita']
// console.log(names.indexOf('Nabin')); -1

//2.includes()
// console.log(names.includes("Ram"));
// console.log(names.includes("ram"));

//Array method that mutates the array(changes the orginal array)
//1.push() -> This method add elements to the end of the orginal array
// let changeName=names.push("Sairaj");
// console.log(changeName);


// pop() ->This method removes last element from the  orginal array.

// let cars=['Mercedes', 'BMW', 'Thar', 'Roll Royce', 'Lamborgi', 'Audi', 'Tesla']
// let popElement=cars.pop();
// console.log(cars);
// console.log(popElement);

//3.shift() ->This method removes the element from the begining of the orginal array
// cars.shift();
// console.log(cars);

//4.unshift() ->This method add elements in the begining and changes the orginal array.
// cars.unshift("Hyundai");
// console.log(cars);

//5.reverse() ->This method reverse the element from last-to-first or frist-to-last
// cars.reverse()

//6.splice()->Method is useful for adding, removing or replacing the element from array
//This method has 3 argument.
//1st argument: Starting index
//2st argument: count
//3st argument: values to be added

//removing element from the array using splicea()
// let values=cars.splice(2,3)
// console.log(cars);
// console.log(values);

//Adding the element
// cars.splice(1,0,"car1","car2")
// console.log(cars);

//REplace elements
// cars.splice(1,2,"car1","car2")
// console.log(cars);

//7.sort() This method is used to arrange the array in ascending order.
// cars.sort((a,b)=>b.localeCompare(a));
// console.log(cars);

// let arrayOfNumbers=[554,55656,22,565,633,522,25,2555,265,98]
// // arrayOfNumbers.sort(function(a,b){return a-b});
// arrayOfNumbers.sort((a,b)=>b-a)
// console.log(arrayOfNumbers);

// let myFunction = (a, b) => a * b;
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a-b});



//Array Methods that doesnot changes the orginal array.

// let cars=['Mercedes', 'BMW', 'Thar', 'Roll Royce', 'Lamborgi', 'Audi', 'Tesla']

//slice() ->this method is used to take out portion of the array. It doesn't mutate the orginal array.
//1st arg =starting index
//2nd arg=end index (not including the last element of count)


// let sliceArray=cars.slice(2,6);
// console.log(sliceArray);
// console.log(cars);

//Spread Operator: -> It spreads the value of orginal array to another array.

// let array1=[1,2,3,4]
// let array2=[5,6,7]

// let combinedArray=[...array1,...array2]
// console.log(combinedArray);

// // Call Stack 
// function one() {
//     two();
// }

// function two(){
//     three();
// }

// function three()
// {
//     console.trace(one())
// }


// //task
// let number=[1,2,3,4,5]
// let output=()=>{
//     for (const iterator of number) {
//         iterator+2;
//         console.log(iterator);
//     }
// }

// console.log(output);

// let students=[1,2,3,4,5];
// let sum=[];
// for (let iterator of students) {
//     sum.push(iterator*2);
// }
// console.log(sum);


// let salary=[1000,2000,6000,6542]
// let newSalary=[];
// for (let iterator of salary) {
//     newSalary.push(iterator*1.15);
// }
// console.log(newSalary);

// arr.map(callbackFnx(value,index,array))
// let nums=[67,52,39]
// let newArr=nums.map((val)=>{
//     return val*2;
// });
// console.log(newArr);

// let newStudent=students.map((val)=>{
//     return val*2;
// });

// console.log(newStudent);

//The Map Method:
//map() ->This method is used to change or map the elements of an array. This methods iterates over the array map its element.this method requires a callback function (higher order function) which has three parameters.
// 1st parameters    =>elements of the array
// 2st parameters    =>index of the array
// 3st parameters    =>array itself(rarely used)

//syntax:
//array.map((e,i,a)=>{})
//array.map(function(e,i,a){})

// let studentArray=["Mahendra","shanti","Adyatan","saloni","sairaj","sachet"]

// let newStudents=studentArray.map((val,i)=>{
//     return `Rollno: ${i+1}-${val}`;
// });

// // console.log(newStudents);
// let newSllary=salary.map((val)=>{
//     return (val*1.15).toFixed();
// })

// console.log(newSllary);

// let ktmTempThisWeek=[11,23,45,65,84,21,20]
// let selsisTemp=ktmTempThisWeek.map((val)=>{
//     let temp=(val*9/5)+32;
//     return `${val}KTM Temperature into foreignheight ${temp}f`;
// })

// console.log(selsisTemp);


// Filter()
// filter creates a new array of elements that give true for a condition/filter.
// 1st parameters    =>elements of the array
// 2st parameters    =>index of the array
// 3st parameters    =>array itself(rarely used)
// let arr=[1,2,3,4,5,6,7]
// let evenarray=arr.filter((val)=>{
// return val%2==0;
// });
// console.log(evenarray);

let basicSalary=17500;
// let income=[15000,50000,15750,67000,75000,21000,2000,10000,20000,100000];
// let outputt=income.filter(e=>{
//     return e<basicSalary;
    
// })
// console.log(outputt);
// let outPut=income.filter((e)=>{

//     let basicc= (e<basicSalary);
//     return ((basicc-e)/basicc)*100;
// });

// console.log(outPut);
// console.log(`out of ${income.length},${outPut.length} people are having less income than it shuld be`);


//e is x% less than basic salary



// Reduce()
// reduce performs some operations and reduces the array to a single value.it doesn't return a new array. it returns a single value that can be of any datatype which is accmulated in its accmulator.

//Reduce method generally has two arguments, 1st arg is the callback function and the second arg is initial value of accomulator.

//It has a callback function similiar to map and filter method but it has one extra parameter in the begining which is the accmulator.

//syntex
// array.reduce((accmulator, currentElement, currentIndex, array)=>{},initialValue of accmulator)

// value.
//Wap to sum the number present in the array
arr=[1,2,3,4,5,6];
// const output=arr.reduce((res,curr)=>{
// return res+curr;
// });
// console.log(output);

// console.log(output);
// lets understand
// res=1 and curr=2 1+2=3
// res=3 and curr=3 3+3=6
// res=4 and curr=6 4+6=6
// res=5 and curr=10 5+10=15
// res=6 and curr=15 6+15=21
// output is: 21

let income=[100,200, 500, 500];
const output=income.reduce((res,curr)=> res+curr/income.length );
// console.log(`Averahe income is: ${output/income.length}`);
// console.log(`Averahe income is: ${output}`);


//string to array
// let str='Hello World';
// let newArray=[...str]
// console.log(newArray);
// Using Array contructor
// let newOutput=Array.from(str)
// console.log(newOutput);

//string number using array
//split Method
//by using spraid operator.
let str1="Hello World";
let output3=str1.split("");
console.log(output3);

let strname="shiva Bahadur Chaudari"
let toArray=strname.split('');

// let output4 =toArray.map(e=>{
//     if(e==="a")
//     {
//         return 1;
//     }else{
//         return 0;
//     }
// }).reduce((acc,curr)=>acc+curr);

// let count=output4.reduce((acc,curr)=>{ acc+curr})

// //Array method channing
// let output5=strname.split('').reduce((acc,curr)=>{
//     if(curr==="a"){
//          acc++;
//     }
//         return acc;
    
// },0)
// console.log(output5);

// //Array Destructuring

// let [a,b,c]=[1,2]
// console.log(a,b,c);

let [a,b,...rest]=[1,2,3,4,5,6,7]
// console.log();

//rest parameter vs spraid operator