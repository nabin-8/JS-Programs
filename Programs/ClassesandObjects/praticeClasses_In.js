// class User{
//     name(userName){

//         return userName;
//     }

//     email(userEmail){
//         return userEmail;
//     }
// }

//pratice 1
let DATA="secret information";

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;

    }
    viewData(){
        console.log("data = ",DATA);
    }

}

let student1=new User("Nabin","nabin@gmail.com")

// pratice 2

class Admin extends User{
    constructor(name, email){
        super(name,email);
       
    }
    editData(){
        DATA="some new value";
    }
}