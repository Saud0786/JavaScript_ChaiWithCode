// Primitive

// 7 types: String , number , Boolean , Undefined , null ,Symbol , BigInt

let name ="saud"  // String
const isLoggedIn=false  // boolean
let num =23  // number
let decimalNum = 9.4 // number
let temprature;  // undefined
let box =null // object
let bigNum = 556682678457887n  // BigInt
const Id=Symbol('211')
const Id2=Symbol('211')
console.log(Id===Id2);


// Non-Primitive(Refrence)

// Array , Function , Object

let arr=["saud",3,num]   // dataType (Object)

let NewFuction=function(){
  friend = "ashif",
  age=21,                     // dataType (Object Function)
  isMarried=flase
}

let MyObj={
    myName:"saud",
    weight:65,
    height:5.5              //dataType (Object)
}


console.log(typeof Id);



// *** IMP Note :
// Stack(Primitive)  original value not change when you change copy value  ||  Heap(Non-primitive)  all value change because of reference at same variable