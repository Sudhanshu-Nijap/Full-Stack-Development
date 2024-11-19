const arr = [1,2,3,4,5]
arr.forEach((i) =>{
    console.log(i+" jj")
});

// Using forEach function - It does not returns (undefuned)
let newArray = [];
const numbers = [1,2,3,4,5,6,7]
numbers.forEach(i => {
    newArray.push(i**2)
});

console.log(newArray);

// Using map function - It returns array
let map = numbers.map(i => {
    return i;
});
console.log(map);

// find function
const nums = [1,2,3,4,5,6];
let find = nums.find(i => i === 4 );
console.log(find);

// findIndex function
// find function
const nums2 = [1,2,3,4,5,6];
let find2 = nums2.findIndex(i => i ===4 );
console.log(find2)
console.log(nums2[find2])

// includes - returns true or false  
const inc = nums.includes(5)
console.log(inc)

// filter - returns only which passes the condition 
const fil = nums.filter(i => i%2 == 0);
console.log(fil);

// map - creates a new array
const a = nums.map(i => i*2);
console.log(a);

// reduce - reduces an array to a single value
const red = nums.reduce((a,b) => a+b);
console.log(red);

// splice - deletes from the existing array and returns the deleted array
const arr1 = [1,2,3,4,5];
let ans = arr1.splice(1,3);
console.log(ans); // o/p - [2,3,4]
console.log(arr1) // o/p - [1,5]