// const myArray= [1,2,3,4]

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][2]);

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

const all_newHeros = [...marvel_heros, ...dc_heros]
console.log(all_newHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Nabin"))
console.log(Array.from("Nabin"))
console.log(Array.from({ name: "Nabin" }))//interview prespective

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));