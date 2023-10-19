//Immediately Invoked Function Expression (IIFE)


(function one() {
    //named IIFE
    console.log(`DB CONNECTED`);
})();

// one()



(() => {
    console.log(`DB CONNECTION TWO`);
})();

((name) => {
    console.log(`DB CONNECTION TWO ${name}`);
})('Nabin');