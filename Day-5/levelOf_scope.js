//Scope level and mini hosting in javascript
//nested scope
//closer


function one() {
    const username = "nabin"

    function two() {
        // const website = "youtube"
        var website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()


if (true) {
    const username = "Nabin"
    if (username === "Nabin") {
        const website = "youtube"
        console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);


//intresting concept 

function addone(value) {
    return value + 1;
}

addone(5)

const addTwo = function (num) {
    return num + 2;
}

addTwo(6)