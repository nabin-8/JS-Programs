const student={
    fullName:"Nabin Acharya",
    marks: 94.44,
    printMarks:function(){
        console.log("Marks= ",this.marks);
    }
}

const employee={
    calcTax(){
        console.log("tax rate is 10%");
    },
};

const karanArjun={
    salary:50000,
};

karanArjun.__proto__=employee;

// karanArjun
// Object { salary: 50000 }

// karanArjun.calcTax()
// tax rate is 10%