// console.log("hello");

// window object
// The window object represents an open window in a browser. it is browser's object (not javaScript's) and is automatically created by browser.

// it is a global object with lots of properties and methods.

// what is dom?
// when a web page is loaded, the browser creates a document object model(DOM) of the page

//window
//document
//window.document
// console.dir(window.document)
// console.dir(document.body)
// console.dir(document.head)

// console.dir(document.body.style.background="blue");
// document.body.style.background="green"

// document.body.childNodes[1].innerText="HJBHB";

//Dom Manipulation
// select with id 
// document.getElementById("myid")

// select with class 
// document.getElementsByClassName("myclass")

// select with tag 
// document.getElementsByTagName("p")

//example
// let heading=document.getElementById("hed1") //h1

// console.log(heading);


// querySelector
// document.querySelector("p") //1st Element

// document.querySelectorAll("p") //all element

// Dom Manipulation properties
// tagName: returns tag for element nodes
// innerTexe:returns the text content of the element and all its children
// innerHTML: retuens the plain text of HTML contents in the element
//textContent: returns textual content even for hidden elements

// let firstEl=document.querySelector("#submit")
// console.dir(firstEl)

// let div=document.querySelector("div");
// console.dir(div)

// let appen=document.querySelector("#append");
// console.dir(appen)
// appen.innerText=appen.innerText+" from apna collage students"

let box=document.querySelectorAll(".box")
// console.dir(box);
// box[0].innerText="Unique Hello boxes1"
// box[1].innerText="Unique Hello boxes2"
// box[2].innerText="Unique Hello boxes3"

// using loops
let idx=1;
for (let i of box) {
    i.innerText=`new unique value ${idx}`;
    idx++;
}