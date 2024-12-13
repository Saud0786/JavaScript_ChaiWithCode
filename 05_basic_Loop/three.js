const arr =[1,2,3,4,5]
for (const num of arr) {
  // console.log(num);
}

const greeting ="Hello World!";
for (const greet of greeting) {
  // console.log(greet);
}

// maps
const map =new Map();
map.set('IN',"India")
map.set('US',"United States")
map.set('Fr',"france")

// console.log(map);

for (const [key,value] of map) {
 // console.log(key,':-',value);
}


// object
const myObject={
  game1:"PUBG",
  game2:"Candy",
  game3:"GTA"
}

 // it not work on objects
for (const [key,value] of myObject) {
  // console.log(key,':-',value);
 }  
