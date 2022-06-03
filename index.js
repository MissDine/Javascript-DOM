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
const bbs = document.querySelectorAll("p")
console.log(bbs);

// Accessing a single element with the same tag eg one p in many ps
console.log(bbs[1]);
// ForEach- to see all the tags 
bbs.forEach(bbs=>{
    console.log(bbs);
})

// Get an element by ID
const title = document.getElementById("page-title")
console.log(title);
// Get an element by Classname
// We cannot use for each in a html collection
const err = document.getElementsByClassName("error")
console.log(err);
// Get an element by their tag
const ta = document.getElementsByTagName("p")
console.log(ta);
// Accessing a single tag
console.log(ta[2]);

const cont = document.querySelector(".content")
console.log(cont.innerText);
// Overwriting an html text
cont.innerText = "You are a nice woman"
console.log(cont.innerText);

const aras = document.querySelectorAll("p")
aras.forEach(par => {
    console.log(par.innerText);
    par.innerText += " -New tex"
})

