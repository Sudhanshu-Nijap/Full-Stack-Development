function add(a,b,c=9){
    console.log(a,b,c);
    return a+b+c;
}
result = add(2,4);
result1 = add(4,6);
result2 = add(1,3,4);
result3 = add(3);
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);

// Arrow Function
const func = (x)=>{
    console.log("Hello",x);
}
func(34);
func(54);
func("power");

const func1 = (n,a)=>{
    console.log("Name:",n,"\nAge:",a);
}
func1("Sudhu",18);

let obj = {
    name:"Sudhu",
    age:18,
    address:"Mahim",
    show: ()=>{
        console.log(`The name is ${this.name}`);
    }
}
console.log(obj.name);

for (const i in obj){
    console.log(obj[i])
}