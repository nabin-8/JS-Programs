// This Keyword and Arrow Fuction 


const user = {
    username: "Nabin",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// console.log(this);
// function one() {
//     console.log(this);
// }
// one()

//Arrow Function

const chai = () => {
    let username = "nabin"
    console.log(this.username);
}
// one()


// ( ) =>{ }

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }


// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({ username: "Nabin" });

console.log(addTwo(7, 8));


const myArray = [2, 3, 4, 5, 6]

// myArray.forEach(function(){})
myArray.forEach(() => { })