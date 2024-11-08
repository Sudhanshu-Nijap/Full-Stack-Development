// Data Types 
let integer = 10;
let string = "Sudhu";
let bool = true;
let float = 24.5;
let n = null;
let un = undefined;
console.log(integer,string,bool,float,n,un);
console.log(typeof integer,typeof string,typeof bool,typeof float,typeof n,typeof un);

// object (dict)
let o = {
    "name":"sudhu",
    "job role":"Data engineer",
    "working":true,
    "salary":56000
}
console.log(o);
o.education = "B.TECH";
console.log(o);


// let, var, const
let a = 10;
var b = 20;
const c = 30;
{
    let a = 66;
    var b = 21;
    console.log(a,b);
}
console.log(a,b);