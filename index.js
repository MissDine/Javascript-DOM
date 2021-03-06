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
    // We use += to append some info
    par.innerText += " -New tex"
})
// Accessing content in a div
const content = document.querySelector(".content")
console.log(content.innerHTML);
// changing content in a div
content.innerHTML = "<h2>This is a new h2</h2>"

const people = ["Enid","Pauline","Lilian","Sharon","Doreen"]
people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`
})
// Getting attributes
const link = document.querySelector("a")
console.log(link.getAttribute("href"));
// Setting/changing an attribute-takes in two arguments,what u wanna change/set and value u wanna change to
link.setAttribute("href","https://www.enid.com")
link.innerText = "Miss Dine"

const msg = document.querySelector("p")
console.log(msg.getAttribute("class"));
msg.setAttribute("class","success")

msg.setAttribute("style","color:greenyellow")

// para.setAttribute("style","color:orangered")


const ret = document.getElementById("page-title")
ret.setAttribute("style","color:Orange")
console.log(ret.style);
// getting to know the properties of an element 
console.log(ret.style.color);
// Adding property
ret.style.margin = "50px"
ret.style.fontSize = "5rem"
ret.style.color = "crimson"
// Deleting a property-have blank ""
ret.style.margin = ""
// Adding,change and removing classes from elements
const per = document.querySelector("p")
console.log(per.classList);
// Adding a class
per.classList.add("Error")
// Removing classes from an element
per.classList.remove("success")

let Ps = document.querySelectorAll("p")
Ps.forEach(pss =>{
    if (pss.textContent.includes("error")) {
        pss.classList.add("error")
    }else{
        pss.classList.add("success")
    }
    // console.log(pss.classList.add("paragraph"));
}) 
// We use textContent to find all data regardless if its hidden or not
// Changing classes of an element

// How to toggle a class-For instance if an ellement has a class we remove it and if it doesn't we add a class
const Doo = document.querySelector(".page-title")
Doo.classList.toggle("Test")
