//Functions in JavaSCript
// Block of code that performs a specific task, can be invoked whenever needed

// function defination
// function name(params) { //Syntax of function
    
// }

// Function Call
// functionName(); like console.log();

// function myFunction(){
//     console.log("Welcome");
// }

myFunction();
// function is used to decrease redendency->repetation

function printFunction(msg){
    //parameter ->input
    console.log(msg);
}
// printFunction("Hello");//argument

function calculator(num1,num2){
    a=num1;b=num2;
    console.log(`The sum of${a}+${b}is: ${a+b}`);
}

// calculator(10,20);

// function with return keyword
function func1(a,b) {
    let sum=a+b;
    return sum;
}

func1(20,30);

// Arrow function 
// Arrow function is the compact way of writing a function 

//sum function
// function mul(a,b) {
//     return a*b;
// }
// using arrow function
// const arrowsum=(a,b)=>{
//     console.log(a+b);
// };

// arrowsum(10,20);

// multiplication arrow function 
// const arrowmul=(x,y)=>{
//     console.log(x*y);
// };

// arrowmul(5,10);

// we can remove {braces} also for single line

const printHello=()=>console.log("Hello");
printHello();

//pratice questions
function vowels(a) {
    for (const i of a) {
        if(i==='a' ||i==='e' ||i==='i'||i==='o'||i==='u')
        {
            console.log(`${i} is vowels`);
        }
    }
    
}

// vowels("hello");

let countVowles=(str)=>{
    let count=0;
    for (const i of str) {
        if(i==='a' ||i==='e' ||i==='i'||i==='o'||i==='u')
        {
            count++;
            console.log(`${i} is ${count}vowels`);
            
        }
    }
    return count;
};
countVowles("aeiou")