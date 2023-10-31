//iterations
//For Loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

var i, j;
// for (i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is Best number");
//         break;
//     }
//     console.log(i);
// }


for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop Value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop Value i:${i} and j:${j}`);
        // console.log(i + '*' + j + '=' + i * j);

    }

}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}


//break and continue

for (i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is Best number");
        continue; //skip for one time
    }
    console.log(i);
}