//Variables
const accountId = 145684
let accountEmail = "nabin@google.com"
var accountPassword = "123456"
accountCity = "Palpa"
let accountstate;
//accountId = 55 //not allowed
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate]);
/**
 * Prefer not to use var
 * because of issue in block scope and functional scope
 */