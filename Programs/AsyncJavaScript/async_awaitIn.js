//Async Await

function api(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            console.log("wether data");
            reslove(200)
        },2000);
    });
}

// async function getWetherData(){
//     await api()//1st
//     await api()
// }

//iife
(async function getWetherData(){
    await api()//1st
    await api()
})();

//Async-await
//iife