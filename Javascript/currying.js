function add(a){
    return function (b){
        return function (c){
            console.log(a+b+c);
        }
    }
}

add(5)(6)(7)

const arrow_add = (a) => (b) => (c) => a+b+c;
console.log(arrow_add(5)(6)(7))

function gmail(from){
    return function (to){
        return function (subject){
            return function (body){
                console.log(`From:${from}\nTo:${to}\nSubject:${subject}\nBody:${body}\n`);
            }
        }
    }
}

gmail("sudhu@gmail.com")("manas@gmail.com")("Scholarship Issue")("My scholarship dint came")

const arrow_gmail = (from) => (to) => (subject) => (body) => 
`From:${from}\nTo:${to}\nSubject:${subject}\nBody:${body}`;

console.log(arrow_gmail("sudhu@gmail.com")("manas@gmail.com")("Scholarship Issue")("My scholarship dint came"))
