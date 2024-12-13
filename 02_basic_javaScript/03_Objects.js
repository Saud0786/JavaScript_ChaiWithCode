// singleton
// Object.create

// object literals
const Id= Symbol('56')
const JsUser = {
  name : "saud",
  "age" : 21,
  location:"Bhopal",
  [Id] :'6789', // symbol repersation
  isloged : false,
  mail:"saud@gmail.com",
  lastLogged:["Monday","Tuesday","Wednesday"]
}

// acess method
// console.log(JsUser.age); 
// console.log(JsUser["age"]);
// console.log(typeof JsUser[Id]);

JsUser.mail="fujail@234"
// Object.freeze(JsUser)  // after that no change make
JsUser.mail="fuj@234"
// console.log(JsUser);


JsUser.greeting=function(){
  console.log("Hello JS user");
  
}
JsUser.greetingtwo=function(){
  console.log(`Hello JS user ${this.name}`);
  
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
