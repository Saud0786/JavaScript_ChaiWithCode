const marvel_heros = ["thor", "Ironman","spiderman"]
const dc_heros = ["superman", "flash" , "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // wrong way to merge two array

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);    // first way to merge two array


// const all_new_heros= [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);   // second way to merge two array

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("hitesh"));

console.log(Array.from("hitesh"));

console.log(Array.from({name:"saud",last:"Ansari"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
