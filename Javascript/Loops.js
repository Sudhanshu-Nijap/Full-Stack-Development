for(let i=0;i<5;i++){
    let row = "";
    for(let j=0;j<i+1;j++){
        row+="*";
    }
    console.log(row);
}

let obj = {
    name:"sudhu",
    role:"engineer",
    edu:"btech",
}

// similar as range (for i in range(arr)) 
// k returns index (moves index-by-index)
let a = [1,2,3,4];
for (const k in a){
    console.log(a[k]);
}

for (const key in obj) {
        console.log(key,obj[key]);
        
}

// similar as in (for i in arr)
// c returns value (moves value-by-value)
for (const c of "sudhu") {
    console.log(c);
}

// while loop
let p = 5;
while(p>0){
    console.log(p);
    p-=1;
}

// do=while
m=0;
do{
    console.log(m);
    m+=1;
}while(m<10);