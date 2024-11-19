let arr = [11,2,3,4,5,6];
let s1 = [77,55,22,11];
const myArray = [1,true,"lets"];
console.log(myArray);
console.log(arr.slice(2,4));
console.log(myArray.indexOf("lets"));
console.log(arr.toString());
console.log(arr.join("-"));
console.log(arr.pop());
console.log(arr.push(1,2,3)); // returns modified length
console.log(arr.shift()); //removes the first element
console.log(arr.unshift(22)); //adds element in first pos
let del = delete arr[0];
console.log(arr)
console.log(s1.sort());
console.log(s1.reverse());
let sp = arr[1,5];
console.log(arr.concat(s1)); //like append
let spl = arr.splice(0,2,10,20)
console.log(arr); //like insert