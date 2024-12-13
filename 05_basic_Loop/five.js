const coding=["Java","js","py","c++"]
coding.forEach(ele => {
 // console.log(ele);
  
});

coding.forEach(function(item){
  //console.log(item);
  
})

function printme(item){
//  console.log(item);
  
}
coding.forEach(printme)

coding.forEach( (item,index ,arr)=>{
 // console.log(item,index,arr);
  
})


// inside array objects
const myCoading=[
  {
    languageName:"Java",
    languageFileName:"java"
  },
  {
    languageName:"python",
    languageFileName:"py"
  },
  {
    languageName:"C++",
    languageFileName:"cpp"
  },

]
myCoading.forEach(item=>{
  console.log(item.languageName);
  
})