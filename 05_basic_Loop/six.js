const coading =["js","java","python","css"]

const values = coading.forEach( (item) => {
  return item
} )
// nothing return
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9]

const newNums =myNums.filter( (num)=>{
  return num>4
} )
// console.log(newNums);

const arr =[]
myNums.forEach((num)=>{
  if(num>4){
    arr.push(num)
  }
})
// console.log(arr);


const books = [
  {title: 'Book one' , genre: 'Fiction' , publish: 1992, edition : 2003},
  {title: 'Book two' , genre: 'history' , publish: 1902, edition : 2023},
  {title: 'Book three' , genre: 'Science' , publish: 2002, edition : 2014},
  {title: 'Book four' , genre: 'Non-Fiction' , publish: 1995, edition : 2013},
  {title: 'Book one' , genre: 'Fiction' , publish: 2002, edition : 2009}
]

const bks = books.filter((bk)=>{
  return bk.genre =='Fiction' && bk.edition == 2009
})
// console.log(bks);
