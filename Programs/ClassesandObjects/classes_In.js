class toyotaCar{
    constructor(brand){
        console.log("Creating new object");
        this.brand=brand;
    }
    start(){
        console.log("Start");
    }

    stop(){
        console.log("stop");
    }

    // setBrand(brand){
    //     this.brandName=brand;
    // }
}

let fortuner=new toyotaCar("fourtuner");
// fortuner.setBrand("fortuner")
let lexus=new toyotaCar("texus");