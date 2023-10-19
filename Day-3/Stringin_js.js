//This is older way to write string
const name = "Nabin"
const repoCount = 10
console.log(name + repoCount + " Value");


//This is newer way to write string
//BackTicks => `` we use rather than ""or''double or single cotation

//string-interpolation
//it helps to make placeholders we can directly variable inject
//`Hello my name is (variable inject)${} and myrepo count is ${}`

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

//way to declare string
const Myname = "Khum"
const gameName = new String('khumNabinAcharya')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('m'));
console.log(gameName);

const newString = gameName.substring(0, 2)
console.log(newString);

const anotherString = gameName.slice(-9, 4)
console.log(anotherString);


const newStringOne = "    Nabin   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://nabin.com/nabin+58Acharya"
console.log(url.replace('+58', '-'));

console.log(url.includes('nabin'));
const yname = "nabin-acharya-hello"
console.log(yname.split('-'));

//************************************************** */
/**
 * const gameName = new String('khum')
undefined
gameName
String { "khum" }
​
0: "k"
​
1: "h"
​
2: "u"
​
3: "m"
​
length: 4
​
<prototype>: String { "" }
 ​
anchor: function anchor()
 ​
at: function at()
 ​
big: function big()
 ​
blink: function blink()
 ​
bold: function bold()
 ​
charAt: function charAt()
 ​
charCodeAt: function charCodeAt()
 ​
codePointAt: function codePointAt()
 ​
concat: function concat()
 ​
constructor: function String()
 ​
endsWith: function endsWith()
 ​
fixed: function fixed()
 ​
fontcolor: function fontcolor()
 ​
fontsize: function fontsize()
 ​
includes: function includes()
 ​
indexOf: function indexOf()
 ​
italics: function italics()
 ​
lastIndexOf: function lastIndexOf()
 ​
length: 0
 ​
link: function link()
 ​
localeCompare: function localeCompare()
 ​
match: function match()
 ​
matchAll: function matchAll()
 ​
normalize: function normalize()
 ​
padEnd: function padEnd()
 ​
padStart: function padStart()
 ​
repeat: function repeat()
 ​
replace: function replace()
 ​
replaceAll: function replaceAll()
 ​
search: function search()
 ​
slice: function slice()
 ​
small: function small()
 ​
split: function split()
 ​
startsWith: function startsWith()
 ​
strike: function strike()
 ​
sub: function sub()
 ​
substr: function substr()
 ​
substring: function substring()
 ​
sup: function sup()
 ​
toLocaleLowerCase: function toLocaleLowerCase()
 ​
toLocaleUpperCase: function toLocaleUpperCase()
 ​
toLowerCase: function toLowerCase()
 ​
toString: function toString()
 ​
toUpperCase: function toUpperCase()
 ​
trim: function trim()
 ​
trimEnd: function trimEnd()
 ​
trimLeft: function trimStart()
 ​
trimRight: function trimEnd()
 ​
trimStart: function trimStart()
 ​
valueOf: function valueOf()
 ​
Symbol(Symbol.iterator): function Symbol.iterator()
 ​
<prototype>: Object { … }
  ​
__defineGetter__: function __defineGetter__()
  ​
__defineSetter__: function __defineSetter__()
  ​
__lookupGetter__: function __lookupGetter__()
  ​
__lookupSetter__: function __lookupSetter__()
  ​
__proto__: 
  ​
constructor: function Object()
  ​
hasOwnProperty: function hasOwnProperty()
  ​
isPrototypeOf: function isPrototypeOf()
  ​
propertyIsEnumerable: function propertyIsEnumerable()
  ​
toLocaleString: function toLocaleString()
  ​
toString: function toString()
  ​
valueOf: function valueOf()
  ​
<get __proto__()>: function __proto__()
  ​
<set __proto__()>: function __proto__()
 */