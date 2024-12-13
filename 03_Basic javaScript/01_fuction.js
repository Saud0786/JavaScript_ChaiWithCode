function sayMyName(){
   console.log("S");
   console.log("A");
   console.log("U");
   console.log("D");
}

//sayMyName()

function addTwoNum(n1,n2){
  // let sum=n1+n2
  // return sum
  return n1+n2
}
sum=addTwoNum(2,3)
// console.log("Result:", sum);




function loginUserMessage(userName){
  if(!userName ){
    console.log("Please enter a username");
    
    return 
  }
  return`${userName} just logged in`
}

//console.log(loginUserMessage("saud"))
 



function calculateCartPrice(...num1){
     return num1
}
// console.log(calculateCartPrice(10,34,53,21));





const user={
  usersName:"saud",
  price:199
}
function handleObject(anyObject) {
  console.log(`Username is ${anyObject.usersName} and price is ${anyObject.price}`);  
}
// handleObject(user)
// or
// handleObject({
//   usersName:"ashif",
//   price:900
// })




const myNewArray =[20,30,40,50]

function returnSecondValue(getArray){
  return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([90,200,321]));
