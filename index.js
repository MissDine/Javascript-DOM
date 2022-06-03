// The DOM-Creat
// Getting access to a paragraph or a tag element-DOCUMENT.QUERYSELECTOR
const para = document.querySelector("p")
console.log(para);
// Getting access to a class element
const Par = document.querySelector(".error")
console.log(Par);

// Getting access to a div with a class name
const Pa = document.querySelector("div.cal")
console.log(Pa);
// For uniques selectors - go to the item on the browser and copy its selector on the console eg
const Ba = document.querySelector("body > h1")
console.log(Ba);

// GRABBING MULTIPLE ELEMENTS-DOCUMENT.QUERYSELECTORALL
const bb = document.querySelectorAll("p")
console.log(bb);

// Accessing a single element with the same tag eg one p in many ps
console.log(bb[1]);



