//**********Numbers */
const score = 400
// console.log(score);
const balance = new Number(100)
// console.log(balance);


// console.log(typeof (balance.toString()));
// console.log(balance.toString().length);
// console.log(typeof (balance));

// console.log(balance.toFixed(2));
const otherNumber = 23605.89668
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


/**++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++ */

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.54));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));


// console.log(Math.min(5, 10, 15, 3, 9));
// console.log(Math.max(5, 10, 15, 3, 9));

// console.log(Math.random());
// for (let i = 0; i <= 30; i++) {
//     let num = (Math.random() * 100).toFixed(0)
//     console.log(num);
//     if (num == 20) {
//         console.log(`You win By ${i} number is 20`);
//         break;
//     } else if (i == 30) {
//         console.log(`Dont Get the Number`);
//     }

// }

console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//should revision