//Events in js
//The change in the stste of an object is known as an event
// Events are fired to notify code of "interesting changes" that may afffect code execution.

/**
 * Mouse events (click, double click etc)
 * Keyboard events (keypress, keyup, keydown)
 * form events (submit etc.)
 * print event and many more
 */
// let body =document.querySelector("body")
// let button =document.querySelector("button")
// // console.dir(button)
// button.onclick=()=>{
//     body.style.backgroundColor="green"
// }

// let btn1=document.querySelector("#btn1");

// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// }

// btn1.onmouseover=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// }

//Event Listners
/**Event Handling ways
 * 1).Inline handling
 * 2).Js node.event=()=>{}
 * 3).Event Lisner
 */
let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    console.log("btn was clicked-handler1");
});
btn1.addEventListener("click",()=>{
    console.log("btn was clicked-handler2");
});
let handler3=()=>{
    console.log("btn was clicked-handler3");
};
btn1.addEventListener("click",handler3);

//To remove event listner
btn1.removeEventListener("click",handler3)

//pratice question
// Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again.

let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currentMode="light";
let changer=()=>{
    if(currentMode==="light"){
        currentMode="dark";
        body.style.backgroundColor="black"
    }else{
        currentMode="light";
        body.style.backgroundColor="white" 
    }
    console.log(currentMode);
};
modeBtn.addEventListener("click",changer);
