//let promise=fetch(url,[options])

const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#BTN");


// const getFacts= async ()=>{
//     console.log("getting data....");
//     let response = await fetch(URL);
//     console.log(response); //JSON FORMAT
//     let data=await response.json();
//     factPara.innerText=data[1].text;
    
// }

//using promises
// function getFacts(){
//     fetch(URL).then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         factPara.innerText=data[4].text;
//     })
// }
// btn.addEventListener("click",getFacts);

//Requests and Response
//HTTP verbs => Hyper Text Transfer Protocle