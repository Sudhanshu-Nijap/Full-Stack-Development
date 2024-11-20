console.log("hello");

let js = document.getElementsByClassName("box");
console.log(js)
js[2].style.backgroundColor = "green";

document.getElementById("red").style.backgroundColor = "red";
document.querySelector(".box").style.backgroundColor = "yellow";

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "purple";
});