//ecomerse card example
// ...isrest and sperade operator according to setuation
// function calculateCardPrice(...num1) {
//     return num1
// }

function calculateCardPrice(va1, val2, ...num1) {
    return num1
}

// console.log(calculateCardPrice(200, 400, 500, 200, 600, 900));

const user = {
    username: "nabin",
    price: 999
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is${anyobject.price}`);
}

// handleObject(user);

handleObject({
    username: "khum",
    price: 255
})

const myNewArray = [200, 400, 100, 600]

function retutnSecondValue(getArray) {
    return getArray[3]
}

console.log(retutnSecondValue(myNewArray));

console.log(retutnSecondValue([200, 400, 500, 1000]));