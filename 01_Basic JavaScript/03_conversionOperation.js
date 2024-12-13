let score = "33"

// console.log(typeof score);  // number
// console.log(typeof (score));   // number

let flag= "1";
let valueInNumber =Number(flag);
//  console.log(typeof valueInNumber);  
// console.log(valueInNumber);
 
// "33"  => 33 
// "33abb" => NaN
// true =>1 ; false =>0;

let isLoggedIn = "12d"

let booleanIsLogged =Boolean(isLoggedIn)

// console.log(typeof booleanIsLogged)
// console.log(booleanIsLogged);

// "" => flase
// "2d" => true

let stringCon= false;
let IntToString = String (stringCon)

// console.log(IntToString);
// console.log(typeof IntToString)

// all value converted into string


// **************************** operation **************

// console.log("1" + 2);
// console.log("1" + 2 + 2);       // o/p => 122 in string form because string is written first
// console.log(2+"1" + 2);
// console.log(2 + 2 + "1");   // o/p => 41 because num is writen first


// console.log(+true);  // o/p => 1
// console.log(+"");   // o/p => 0   it is very bad code for company work


let num1,num2,num3; 
num1=num2=num3=2+2
console.table([num1,num2,num3]);


