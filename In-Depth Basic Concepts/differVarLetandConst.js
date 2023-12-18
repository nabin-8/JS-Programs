        //Var
//Var=> var is used to declare those variables which may/will change overtime during the execution of program
// var x; // variable decleration (undefine)
// x=5; // assigning value /Insilizing value
// console.log("Before: "+x)
// x=10; //value re-assign
// console.log("After: "+x)
//2.Variable redecleration is possible in var which is not good thing
//  var y="Somthing really important";
//  console.log("Variable y: "+y);
//  var y="Somthing not really important";
//  console.log("Variable y: "+y);
//  // It is possible in var but in let ...not passible


                //Let
//Let=> let is used to declare those variables which may/will change overtime during the execution of program
// let x; // variable decleration (undefine)
// x="Hello World"; // assigning value /Insilizing value
// console.log("Before: "+x)
// x=10; //value re-assign
// console.log("After: "+x)
//2.Variable redecleration is not possible in let which is good thing
// let y="Somthing really important";
//  console.log("Variable y: "+y);
//  let y="Somthing not really important";
//  console.log("Variable y: "+y);
//  // It is possible in var but in let ...not passible




                //Const
//Const=> const is used to declare those variables which will not/can't change overtime during the execution of program
//2.Variable redecleration is not possible in const which is good thing
// const PIE=3.14; // variable decleration (undefine)
// console.log(PIE);
// const MAX_VALUE =200
// console.log(MAX_VALUE);

// PIE =5; // Value re-assign is not possible using const(Which is not good thing)


// const y="Somthing really important";
//  console.log("Variable y: "+y);
//  const  y="Somthing not really important";
//  console.log("Variable y: "+y);
//  // It is possible in var but in let ...not passible
//Variable redecleration is not possible
//const is block scope

            //Different between let and var
    //Var                               //Let
    //va is function scope              // Let is block scope


                //Scope
    // Understanding of the scope
    // function greet() {
    //     var firstname ="Ram"
    //     console.log(firstname)
    // }
    // console.log(firstname)
    // Block scope
    // if(true){
    //     const lastname ="Sita"
    //     console.log(lastname)
        
    // }
    // console.log(lastname)
    
// ``````````````````````````````````````````````````````
    // => Var is Hoisted
    // => Let is not Hoisted
    // => Const is not Hoisted

// console.log(x);
// var x;
// x=10;
// console.log(x);
//``````````Dont give Error ```````````
// console.log(x);
// let x;
// x=10;
// console.log(x);
//``````````give Error ```````````

//Hoisting
// =>Hoisting is the default behaviour of javaScript that varise "Value decleration with var" and "Function decleration"to the top of the scop not the value.

// JavaScript is backward compatible language.

//Variable define with var are attached to the window object