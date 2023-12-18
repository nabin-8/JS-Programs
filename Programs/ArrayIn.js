// let marks=[89,15,68,58,25];

// let friends=["Nabin", "Sairaj", "Hemanta", "Adyatan"];

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends[3]);

// Looping over an Array
//     Loops -> iterables(strings, objects, Arrays)
// let friends=["Nabin", "Sairaj", "Hemanta", "Adyatan"];
// for (let index = 0; index < friends.length; index++) {
//     console.log(friends[index]);
// }

// let friends=["Nabin", "Sairaj", "Hemanta", "Adyatan"];
// for (const iterator of friends) {
//     console.log(iterator);
// }

// //pratice questions
// let students=[85,65,98,65,89];
// let sum=0;
// for (let iterator of students) {
//     console.log(iterator);
//     sum +=iterator;
// }
// console.log(sum);

//Pratice apply 10 percent offer in the array items
// let items=[250, 645, 300, 900, 50]
// for (const iterator of items) {
//     let discount=iterator/10;
//     console.log(`Before ${iterator} After Discount${iterator-discount}`);
// }

// let =iiterator=300;
// let discount=iiterator/10;
// console.log(discount);

// let books=["C","c++","java", "JavaScript"]
// books.push("Python")
// console.log(books);

// let books=["C","c++","java", "JavaScript", "Python"]
// console.log(books);
// let deletedItem=books.pop()
// console.log("Deleted",deletedItem);
// console.log(books);

// let marks=[25,26,98,21,55]
// const strmarks=marks.toString();
// console.log(typeof(strmarks),marks);

// let marvel_heros=["thor","spiderman","ironman"]
// let dc_heros=["superman", "batman"]
// let heros=marvel_heros.concat(dc_heros);
// console.log(heros);

// let books=["C","c++","java", "JavaScript", "Python"]
// console.log(books);
// console.log(books.slice(1,3));

// let arr=[1,2,3,4,5,6,7,8]
// arr.splice(2,2,101,102)
// //Add Element
// arr.splice(2,0,101);

// //Delete Element
// arr.splice(3,1);

// //Replace  Elements
// arr.splice(3,1,101);
// console.log(arr);

//Pratice  questions

let companies=["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// companies.shift();
// console.log(companies);
// companies[2]="Ola"; we can also use splice method
companies.splice(2,1,"ola")
console.log(companies);
companies.push("Amazin");
console.log(companies);