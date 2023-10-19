

function sayMyName() {
    console.log("N");
    console.log("A");
    console.log("B");
    console.log("I");
    console.log("N");

}
// sayMyName()

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);

}
function addTwoNumbers(number1, number2) {
    // let result=number1 + number2
    // return result;
    return number1 + number2

}
const result = addTwoNumbers(4, 5);

function loginUserMessage(username) {
    if (!username) { //we can also do username === undefined
        console.log("Plse enter a username");
    } else {
        return `${username}Just logged In`
    }

}

// console.log(loginUserMessage("Nabin"))
// console.log(loginUserMessage())


console.log("hello");
