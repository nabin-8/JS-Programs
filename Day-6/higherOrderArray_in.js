// Higher Order Array loops in JavaScript
//for of

// ["", "", ""] //Array and objects
// [{}, {}, {}] //are vary powerful in javascript




const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

//in string for of
const arrString = "Hello Worls!"
for (const str of arrString) {
    // console.log(`Each char is ${str}`);
}

//Maps
const map = new Map()
map.set('IN', "India")
map.set('NP', "Nepal")
map.set('USA', "United States of America")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }


const myObject = {
    jd: 'Javascript',
    cpp: 'C++',
    py: 'python',
    swift: 'Swift by Apple'
}

//for in loop for the object

for (const key in myObject) {
    //    console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}






//For each Loop
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (item) {
//     // console.log(item);
// })

// coding.forEach((val) => {
//     console.log(val);
// })

function printMe(itemm) {
    console.log(itemm);
}

// coding.forEach(printMe())

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })





const myCoding = [
    {
        languageName: "JavaScipt",
        languageFileName: "JS"
    },
    {
        languageName: "JavaScipt",
        languageFileName: "JS"
    },
    {
        languageName: "JavaScipt",
        languageFileName: "JS"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})