// if-else
let age = 20;
if (age<18){
    console.log("Can't Vote");
}
else{
    console.log("Can Vote");
}

// if-else-ladder
let num = 0;
if (num > 0) {
    console.log(num,"is positive");
}
else if (num===0){
    console.log(num,"is equal to 0");
} 
else{
    console.log(num,"is negative");
}

// Ternary operator
let x = 5;
let y = 6;
let z = x>y ? (x+y) : (x-y);
console.log(z);

// == (value compared only)
let a = "3";
let b= 3;
console.log(a==b);

// === (value as well as type compared)
let c = 3;
let d = 3;
console.log(c===d);