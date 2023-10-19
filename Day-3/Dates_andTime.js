//Dates

let MyDate = new Date()
// console.log(MyDate);
// console.log(MyDate.toJSON());
// console.log(MyDate.toString());
// console.log(typeof (MyDate));


// console.log(MyDate.getFullYear());
// console.log((MyDate.getHours()) - 6);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now() / 1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getDay());

console.log(newdate.toLocaleDateString('default', {
    weekday: "long",
}));
