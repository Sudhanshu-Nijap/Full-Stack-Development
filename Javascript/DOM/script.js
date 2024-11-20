console.log("hello");
document.body.childNodes; // all child nodes eg #text div.container
document.body.firstChild; // first child node eg #text 
document.body.lastChild; // last child node eg #text 
document.body.firstElementChild; // first html element eg. div.container
document.body.firstElementChild.childNodes; // first html element all child nodes eg. #text div.box
document.body.children; // all html elements eg div.box script
document.body.firstElementChild.children; // all html elements inside first html element eg. div.box div.box

let cont = document.body.firstElementChild; // div.container
cont.children[3]; // div.box (Box 4)
cont.previousElementSibling; // div.box (Box 3)
cont.nextElementSibling; // div.box (Box 5)
cont.nextSibling; // #text (space between Box 4 and Box 5)