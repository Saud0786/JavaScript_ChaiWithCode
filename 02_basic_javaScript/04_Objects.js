const tinderUser ={}

tinderUser.id="234r"
tinderUser.name="aman"
tinderUser.isLogged=false
// console.log(tinderUser);


const regularUser={
  email:"saud@gmail.com",
  fullName:{
    userName:{
       firstName:"Saud",
       lastName:"Ansari"
    }
  }
}
// console.log(regularUser.fullName.userName.firstName);

// combine two object

const obj1 ={1:"a",2:"b",3:"c"}
const obj2 ={4:"e",5:"f",6:"g"}

// const obj3 = {obj1,obj2}
// console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);  // first way of combine objects

// spread

const obj3 ={...obj1,...obj2}
// console.log(obj3);  // second way of combine objects


const users =[
  {
    id:'e123',
    name:'hello'
  },
  {
    id:'e123',
    name:'hello'
  },
  {
    id:'e123',
    name:'hello'
  }
]

// console.log(users[0].id);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));




//  Object de-Structure
const course ={
  courseName: "js in hindi",
  price: 999,
  courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor : instructor} =course
console.log(instructor);
