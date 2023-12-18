// console.log("one");
// console.log("two");
// console.log("three");

// // setTimeout
// // function hello(){
// //     console.log("hello");
// // }
// // setTimeout(hello,2000);

// setTimeout(()=>{
//     console.log("hello");
// },4000);

// console.log("tour");
// console.log("fifth");

//callback
// function sum(a,b){
//     console.log(a+b);
// }
// function calaculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calaculator(1,2,(a,b)=>{
//     console.log(a+b);
// })

// const hello=()=>{
//     console.log("hello");
// }

// setTimeout(hello,3000);

// //CallBack Hell
// //nesting

// // this is  if-else nseting
// let age=19;
// if(age>=18){
    
//     if(age>=60){
//         console.log("senier");
//     }else{
//         console.log("middle");
//     }
// }else{
//     console.log("child");
// }

// //lets see callback nesting/hell
// function getData(dataId,getNextData){
//     //2
//     setTimeout(()=>{
//         console.log("data",dataId);
//     if(getNextData){
//         getNextData();
//     }
//     },2000);
// }

// // callback hell 
// getData(1,()=>{
//     console.log("getting data2 ....");
//     getData(1,()=>{
//         console.log("getting data3 ....");
//         getData(1,()=>{
//             console.log("getting data4 ....");
//         })
//     })
// })


//promises to solve the callback hell
//promises
// const getPromises =()=>{
//     return new Promise((resolve,reject)=>{
//         // console.log("I am a promise");
//         resolve("success");
//     })
// }
// let promise=getPromises()
// promise.then((res)=>{
//     return console.log("Success",res);
// })

// promise.catch((res)=>{
//     return console.log("Rejected",res);
// })

// function getData(dataId,getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

//promish chaining
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000)
    })
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000)
    })
}


// console.log("Fetching data1....");
// asyncFunc1().then((res)=>{
//     console.log("fetching data2....");
//     asyncFunc2().then((res)=>{})
// })


// // callback hell solve  
// getData(1,()=>{
//     console.log("getting data2 ....");
//     getData(1,()=>{
//         console.log("getting data3 ....");
//         getData(1,()=>{
//             console.log("getting data4 ....");
//         })
//     })
// })

// // callback hell solve  using promises
asyncFunc1(1)
    .then((res)=>{
        return 
    })