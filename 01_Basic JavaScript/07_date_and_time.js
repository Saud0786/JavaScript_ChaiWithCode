// Dates
let MyDate =new Date()
// console.log(MyDate.toString());
// console.log(MyDate.toUTCString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toLocaleString());
// console.log(MyDate.toLocaleTimeString());

// let myCreatedDate = new Date(2024,0,23)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date(2024,0,23,4,11,9)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("01-17-2024")
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2024-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp =Date.now()
console.log(myTimeStamp);    // milisecond
console.log(Math.floor(myTimeStamp/1000));  // second

let newDate =new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);


let fakedate=newDate.toLocaleString('default',{
  weekday:"long"
})
console.log(fakedate);
