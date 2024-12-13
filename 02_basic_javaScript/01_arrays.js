// Arrays
const myArr = [0,1,2,3,4,5,4]
const myHearos= ["SuperMan","Hulk","Iron"]

const myArr2 = new Array(1,2,4,7)


// Arrays Methods

// myArr.push(9)
// myArr.pop()

// myArr.unshift(3)  // first index pe element add
// myArr.shift()

// console.log(myArr.includes(9));  // check arr cotains this value or not
// console.log(myArr.indexOf(4));   // first ocrance index of that element
 
// const newArr=myArr.join()   // array converted to string
// console.log( newArr);

// slice , splice
console.log("A ",myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3)  // this methord change into array cut value from given range
console.log("c ",myArr);