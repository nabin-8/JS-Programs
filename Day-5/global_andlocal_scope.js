
//Global and Local Scope in Js

// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// { }  this is scope
//variable declare outside the carly {} braces are global scope
//inside the {var=56} is local scope

if (true) {
    // let a = 10
    // const b = 20
    // var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);


//function scope
var c = 300
function myfunction() {
    let a = 10
    const b = 20
    var c = 30

    console.log(a);
    console.log(b);
    console.log(c);
}

myfunction()

// console.log(a);
// console.log(b);
// console.log(c);