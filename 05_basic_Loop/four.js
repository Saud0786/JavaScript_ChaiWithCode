const myObject={
  js:'Java Script',
  java:'Java',
  cpp:'c++',
  py:'Python'
}
for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const arr =[1,2,3,4,5]
for (const num in arr) {
   console.log(arr[num]);
}

// we can't itrate on map by using for in loop0