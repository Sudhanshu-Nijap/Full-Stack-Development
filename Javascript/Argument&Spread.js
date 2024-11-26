function num(){
    let num = 0;
    for(let i=0;i<arguments.length;i++){
        num += arguments[i];
    }
    console.log(num);
}
num(1,2,3,4,5);

//spread operatorrr
function number(...num){
    let s = 0;
    for(let i=0;i<num.length;i++){
        s = s + num[i]
    }
    console.log(s);
}
number(1,2,3,4,5,6,7)


//arrow function
const a = () => {
    console.log("hello");
}
a()

const add = (a,b) =>{
    console.log(a+b);
}
add(1,2)

//spread with arrow
let iter = (...num) =>{
    let a = 0
    for(let j = 0;j<num.length;j++){
        a = a+num[j]
    }
    console.log(a)
}
iter(1,2,3,4,5)
