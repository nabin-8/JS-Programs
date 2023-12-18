// class parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class child extends parent{

// }


// class Person{
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("solve problems, buils somthing");
//     }
    
// };
// let nabinObj=new Engineer();
// Engineer.eat();


//super keyword

class Person{
    constructor(){
        console.log("Enter parent constructor");
        this.species="homo sapiens";
    }
    eat(){
        console.log("eat");
    }
   
}

class Enginer extends Person{
    constructor(branch){
        console.log("Enter Child constructor");
        super(); //to invoke parent class constructor
        this.branch=this.branch;
        console.log("Exit Child constructor");
    }
    work(){
        console.log("solve problems, build somthing");
    }
}

let engObj=new Enginer("chemical Enginner");