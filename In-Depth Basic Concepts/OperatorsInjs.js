//OPerators in JavaScript
/*There are different types of JavaScript operators:

   1).Arithmetic Operators
   2).Assignment Operators
   3).Comparison(Relational) Operators
   4).String Operators
   5).Logical Operators
   6).Bitwise Operators
   7).Ternary Operators
   8).Type Operators*/
//Operators are pre-Defined sign and symbols that performs some predefine actions on the operands /value.

/**     1).Arithmetic Operators
 *          a).Addition Operator (+)
 *          b).Substraction Operator (-)
 *          c).Multiplication Operator(*)
 *          d).Division Operator(/)
 *          e).Moduli Operator(%)
 *          f).Exponential Operator(**)
 */


// let num1 = 5;
// let num2 = 10;
// let name = "Ram"
// //a).Addition Operator (+)
// let sum = num1 + num2;
// console.log("The sum is " + sum + " Thik xa Sairaj")

// //In case of string + is concat operator
// let x = name + num1
// console.log(x);

// let firstname = "Nabin"
// let lastname = "Acharya"
// let fullname = firstname + " " + lastname
// console.log(fullname)

// //In case of string + boolean value
// let name = "nabin"
// let value = false
// console.log(name + value);

// //In case of string + undefine value
// let name = "nabin"
// let value
// console.log(name + value);

//````````````````````````````````````
// let num1 = 5;
// let num2 = 10;
// let name = "Ram"
// let boolean = true
// let undefine = undefined
// let nulll = null
// let bignit = 5054n
// //a).Addition Operator (-)
// let sum = num1 - num2;
// let sum2 = num1 - name;
// let sum4 = num1 + undefine;
// let sum5 = num1 + nulll;
// let sum3 = num1 + boolean;
// let sum6 = num1 + bignit;
// console.log(typeof (sum2))
// console.log(typeof (sum2))
// console.log("This is undefine: " + sum4)
// console.log("This is NULL: " + sum5)
// console.log("This is num1-num2: " + sum)
// console.log("This is number-String: " + sum2)
// console.log("This is number-boolean: " + sum3)
// console.log("This is number-bigint: " + sum6) //Error

//````````````````````````````````````````````````````````````````````````````````
//e).Moduli Operator(%)

// let num1 = 5;
// let num2 = 10;
// let name = "Ram"
// let boolean = true
// let undefine = undefined
// let nulll = null
// let bignit = 5054n
// //a).Addition Operator (-)
// let sum = num1 % num2;
// let sum2 = num1 % name;
// let sum4 = num1 % undefine;
// let sum5 = num1 % nulll;
// let sum3 = num1 % boolean;
// //let sum6 = num1 % bignit;
// console.log(typeof (sum))
// console.log(typeof (sum2))
// console.log("This is undefine: " + sum4)
// console.log("This is NULL: " + sum5)
// console.log("This is num1 % num2: " + sum)
// console.log("This is number % String: " + sum2)
// console.log("This is number % boolean: " + sum3)
//console.log("This is number-bigint: " + sum6) //Error

// f).Exponential Operator(**)
/**
 *    x=x**5
 */
//``````````````````````````````````````````````````````````````````````````````````
// Type Coercion
// => It is the defult behaviour of  javaScript that change one datatype to another datatype fourcefully to excute operation succrssfully.

// Type Conversion
// => It is the process of converting one dataType to another dataType by developer's will to execute the operation as expected

// String to number conversion
// ParseInt
// ParseFloat
// PRE ES6 METHODS
/**
 * <script>
     let p =parseInt(prompt("Enterr the principle"))
     let t =parseInt(prompt("Enterr the Time"))
     let r =parseFloat(prompt("Enterr the Rate"))

     let SI =(p*t*r)/100
     console.log(SI)
     let amount =p + SI
     console.log(amount)
     document.write("Simple Intrest is "+SI+"and amount is "+amount)

 </script>
 */

//To Clear the problame of pre es6 number is developed
//``````````````````````````End of Arithematical Operator```````````````````

// 2).Assignment Operators

// let x = 5; //i (=) is assignment operator
// It assign the value in x
// ---------------------------------------
// ii.Addition Assignment(+=)
// x += 7; // equivalent to x=x+7.
// ---------------------------------------
// iii.Subtraction Assignment(-=)
// x-=4; //x=x-4
// ---------------------------------------
// iv.Division Assignment(/=)
// x/=4; //x=x/4
// ---------------------------------------
// v.Multplication Assignment(*=)
// x*=4; //x=x*4
// ---------------------------------------
// vi.Modulo Assignment(%=)
// x%=4; //x=x%4
// ---------------------------------------
// vii.Exponential Assignment(**=)
// x**=4; //x=x**4

//``````````````````````````End of Assignment Operator```````````````````

// 3).Comparision Operators
// i)Greater Than (>)
// console.log(9 > 10);//false
// console.log(10 > 10);//false
// console.log(12 > 10);//true

// ii)Less Than(<)
// console.log(5 < 6);//true
// console.log(6 < 6);//false
// console.log(9 < 6);//fales

// iii).Greater tha Equals to(GTE){>=}
// console.log(6 >= 6);//true
// console.log(7 >= 6);//true
// console.log(5 >= 6);//fales

// iv).Less tha Equals to(LTE){>=}
// console.log(6 <= 7);//true
// console.log(6 <= 7);//true
// console.log(6 <= 7);//fales

// v.(Not Equals to
// console.log(6 != 7);//true
// console.log(6 != 7);//true
// console.log(6 != 7);//fales

// vi Equals to (Loose) (==)
// console.log("hello" == "hello") //true
// console.log(10 == "10")//true
// //It dosnot check data type//True because it converts 10 to string because type corson changes to string. string have high priority.

// v equal to(Strict) (===)
// //It dosnot check data type
// console.log('Hello' === 'World')//fales
// console.log(10 === '10')//false
// console.log(10 === 10);

//-------------------------------------------------------------------------------------
//4.Logical Operator
//Logical Operator in Javascript
//These are the operator which is used to combine value and manipulate them.

// i.AND Operator
// /**It returens true only if all of the values are True. */
// ii.or Operator
// /**It returens true if one of the value is true. */
// iii.Not Operator
// /**It is one of the uniary Operator that returns false if the value is true and vice versa */
/**
 * WAP to check if you're eligible to enter the club and get a free drink.
 * Condition
 * You must be 18 or above
 * You  need to be a girl to get a free drink
 */
/**
 * //let a =Number(prompt("Enter Your Age: "))
        let a=10;
        document.write("CURRENT TIME "+a)
         let sat=false
         let holy=false

        if((a>=10 &&a<=17) &&(sat!=true &&holy!=true)){
            document.write("OFFICE OPEN")
        }
        else{
            document.write("OFFICE CLOSED")
        }
 */

//shrot Circiting
/**
 * if he/she have voterid => ("Go to vote on Mangsar4")
 * let haveVoterId  =true
 * if(Have VoterId)
 * {
 *      console.log("Can vote")
 * }
 * else{
 *      console.log("Cannot vote")
 * }
 *
 * In short circiting
 *
 *
 */



//iv.Special operators

//a). Ternary Operator
//B). Nullish Coelscing Operator
//C).Unary Operator


//a). Ternary Operator
// =>Ternary (Conditional)Operator: It is the Shorthand of IF Else Statement.since it is an operator it can be stored in the variable
/**
 * Syntax:
 * Condition? IfTrue Exexuted:  IfFalse Exexuted
 * Condition? Code to be executed if the condition is True: Code to be executed if the condition is False
 */

//Example:
//WaP to check if user is eligible or not to vote

// let age = 19
// age >= 18 ? console.log("You can Vote") : console.log("You cannot Vote")

// let outputstring = age >= 18 ? `You are eligible` : `You arent eligable`

// console.log(outputstring)

// let canvote = age >= 18 ? true : false
// let next = (age >= 18)
// console.log(canvote)
// console.log(next)



//B). Nullish Coelscing Operator
//In this Operator if LHS value is null or undefined then only RHS will be exexuted.

//Example
// let a;
// a ?? console.log(`Thus executed because there's null or undefine value is LHD\n`)

//     ?? console.log("run this is nalll")

// console.log(12) ?? console.log(" fssdf") //this is not use of this
//main use is
// let address = "KTM"
// address ?? console.log(`Please enter your address`)

//C).Unary Operator
//(i). NOT Operator (!)
//(ii).typeof operator
//(iii).Unary +
//iv. Unary -
//(v). Spread Operator (...)
//(Vi) Increment Decrement Operator
//(ii).typeof operator
//=> This Operator returns the datatype of the operand(Value)

// console.log(typeof ("hello")) //string
// console.log(typeof (99)) //number

//(iii).Unary +
//=>It converts string number
// console.log(+"99") //99
// console.log(+"Hello")// Nan

// //iv. Unary - (Negative Operator):
// let b = -5
// console.log(-b) //5

//(v). Spread Operator (...)

//(Vi) Increment Decrement Operator
let a = 6
a--
console.log(a)
a++
console.log(a)
