//Array

const myArray = [0, 1, 2, 3, 4, 5]
const myheros = ["onePunchMan", "Thor"]

const myArray2 = new Array(1, 2, 3, 4)
// console.log(myArray);
// console.log(myArray[1]);

//Array Methods
// myArray.push(6)
// myArray.push(6)
// myArray.pop()

// myArray.unshift(9)
// myArray.shift()
// console.log(myArray);


// console.log(myArray.includes(5));
// console.log(myArray.indexOf(4));


const newArr = myArray.join()
// console.log(myArray);
// console.log(newArr);

//slice, splice

console.log("A", myArray);
const myn1 = myArray.slice(1, 3)
console.log(myn1);


console.log("B", myArray);
const myn2 = myArray.splice(1, 3)
console.log(myn2);
console.log("C", myArray);