const myNums =[1,2,3]

// const mytotal =myNums.reduce((acc,currVal)=>{
//   return (acc+currVal)
// },1)
const mytotal =myNums.reduce(function(acc,currVal){
 // console.log(`acc: ${acc} and currVal: ${currVal}`);
  
  return (acc+currVal)
},0)
//console.log(mytotal);


const shoppingCard=[
  {itenName:"java course" ,price:7999},
  {itenName:"py course" ,price:799},
  {itenName:"c++ course" ,price:999},
  {itenName:"css course" ,price:1999},
  
]
const priceTotal=shoppingCard.reduce((acc,item)=> acc+item.price,0)
console.log(priceTotal);
