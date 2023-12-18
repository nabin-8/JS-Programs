// Dom Manipulation
//Attributes
//getAttribute(attr) //to get the attribute value

//setAttribute(attr,value) //to set the attribute val th



// let heding=document.querySelector("#hed");
// console.dir(heding)
// heding.getAttribute("id")
// heding.setAttribute("id","hello")

//node.style
// let divbox=document.querySelector("#color")
// console.dir(divbox)
// divbox.style.backgroundColor="black"

//to create element
// let btnel=document.createElement("button")
// btnel.innerText="click me"

// let divbox=document.querySelector("#color")
// divbox.append(btnel) //last
// divbox.prepend(btnel) //first
// divbox.before(btnel) //before element
// divbox.after(btnel) //after element

// let bodyBox=document.querySelector("body")
// let hed1=document.createElement("h1")
// hed1.innerHTML="<i>Hi, I am new heading!</i>"
// bodyBox.prepend(hed1) //after element


//remove elements
let divbox=document.querySelector("#color")
divbox.remove()

//hw pratice appendChild()
// and   removeChild() pratice from mdn

//pratice 1
// let btnel=document.createElement("button")
// btnel.innerText="click me"
// btnel.style.backgroundColor="red"
// btnel.style.color="white"
// let bodyBox=document.querySelector("body")
// bodyBox.prepend(btnel)

//pratice 2
let para=document.querySelector("p")
para.classList.add("newClass")