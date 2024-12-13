// Immediately Invoked Function Expressions (IIFI)

(function chai(){
  // named IIFI
  console.log(`DB CONNECTED`);
  
})();

((name)=>{
  console.log(`DB CONNECTED ${name}`);
})('saud');



