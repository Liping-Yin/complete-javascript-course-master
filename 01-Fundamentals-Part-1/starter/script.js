/*
let js = "amazing"; // ; is not mandatory but a good convention
console.log(3 + 4 + 5);

// ---------------variables
// repeated values 
console.log("jonas");
console.log(24);

let firstName = "LP";
console.log(firstName);
// conventions
let firstCapital = "Capital";
let first_capital = "_capital";
// start with world, underscore, dollar , not funky notation or number;
// not start with capital, good convention. some special case
let PI = 3.14;
let myParent = "Teacher";
let myFirstJob = "designer"; //better naming , easier to understand meaning
let job1 = "designer"; // not good enough

// ----------- Data type
console.log(true);
let jsc = true;
console.log(jsc);

console.log(typeof true);
console.log(typeof javaIsFun);
console.log(typeof 10);
console.log(typeof "jsc");

// dynamic typing, even can change the value of already defined variable
jsc = "dynamicTyping";
console.log(typeof jsc);

// not good to empty variable: undefined
let year;
console.log(year); // automatically hold a value 'undefined'
console.log(typeof year);

year = 1000;
console.log(typeof year);

console.log(typeof null); // show it is a object, it is a bug, it is actually 'null' type



// ----- let,const and var

let age = 30;
age = 20; // if mutate the variable is necessary,  using let
console.log(age);

const birth = 1992;
// when use const, the variable have to be initiated
// always use const as good practice unless you are sure the variable needs to be changed later
birth = 1990; // error, can't change
console.log(birth);

// var is the old way , similar as let
var job = "teacher";
job = "dancer";



// ------------- operators

//--  mathematic operator

const now = 2037; // good practice to make repeated value assigned to a variable
const ageJonas = now - 2000;
const ageSam = now - 1989;

console.log(ageJonas, ageSam);
console.log(ageJonas * 2, ageSam / 20, 2 ** 3);

const firstName = "J";
const lastName = "Gin";
console.log(firstName + " " + lastName); // concatenate strings

// -- assignment operators:
let x = 10;
x += 1;
x *= 2;
x++; // x = x +1;
x--; // x = x -1;
console.log(x);

// -- type of :
console.log(typeof 1);

// -- comparison operators : usually for boolean
console.log(ageSam >= ageJonas);
const result = ageSam <= ageJonas; // in practice , the value stored in a variable
console.log(result);

*/

// ------------- Operator Precedence
// google: mdn operator precedence
/*
const ageJon = 20;
const ageSame = 10;
avgAge = (ageJon + ageSame) / 2;
console.log(avgAge);
*/

/*

//----   -String and Template Literals

const firstName = "john";
const job = "teacher";
const birth = 2000;
const year = 2021;

const jonas =
  "I'm " + firstName + ", a " + (year - birth) + " years old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birth} year old ${job} !`; // backstick --- `
console.log(jonasNew);
console.log("Just a regular string ... ");
console.log("String with \n multiple \n lines");
console.log(`String 
multiple 
lines.`); // backstick again



// ----- Taking decisions: if / else statement
const age = 9;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("Sarah is old enough to have drive license 😍 "); // emoji shortcut windows 10 : Windows + .
} else {
  const yearsLeft = 18 - age;
  console.log(`Sara still needs ${yearsLeft} years ヾ(≧▽≦*)o`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20; // inside block
} else {
  century = 21;
}

console.log(century + " century");



// ------- Type Conversion(manually) and Coercion(automatically)
// let user input , how to handle this when different types are considered

// type conversion
const inputYear = "2019";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18, inputYear + 18);

console.log(Number("John")); // NaN: not a number, invalid number
console.log(typeof NaN); // NaN: number   >>> means invalid number

console.log(String(23), 23);

// type coercion
// special + :   number + string, number will automatically changed into string
console.log(" I'am " + 23 + " years old ");
console.log(23 + " number first ?");
// !!! automatically turned into Number .....
console.log("23" - "12" + 1);
console.log("23" / "12");
console.log("23" * "12");
console.log("23" > "12");

let n = "1" + 1;
n = n + 1;
console.log(n);
 

//--------Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN (not really Boolean false, but when conversed into boolean, these will be false)
// normally javascript do it automatically, coercion
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
// console.log(Boolean(nan)); // error: nan not defined
console.log(Boolean(null));
console.log(Boolean(""));

console.log(Boolean("true"));
console.log(Boolean({}));// empty value
console.log(Boolean(" "));

const money = 0; // falsy value
if(money){
    console.log("you have any money");
}else {
    console.log("you should get a job");
}

let height = 0;
// let height; undefined, same result as 0, bug 
if(height){
    console.log("Yeah, height is defined!");
}else{
    console.log("Height is undefined ")
}



//----------Equality Operators: == vs ===
// === strict equality , no type coercion
// == loose equality, it does type coercion
// good convention/rule: use === as much as you can
const age = 18;
if (age === 18) console.log("You just became an adult ");

if (age == 18) console.log("You just became an adult (loose)");

const favorite = Number(prompt("what's your favorite number")); // convert String to Number
console.log(favorite);
// console.log(typeof favorite); // string  '23' == 23 // coercion

if (favorite === 23) {
  //  23 ==== 23
  console.log("cool! 23 is an amazing number");
} else {
  console.log("Not cool number");
}

if (favorite !== 7) {
  console.log("why not 7");
}



// ---------  Boolean Logic: AND, OR, NOT
// Logic Operator; short circuit
const hasDriverLicense = true;
const hasGoodVision = true;
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);
console.log(!hasDriverLicense && hasGoodVision); // ! precedes && precedes ||

const shouldDrive = hasDriverLicense && hasGoodVision;
if (shouldDrive) {
  console.log("Sarah should drive");
} else {
  console.log("someone else should drive");
}


// --------- Switch statement
const day = "monday ";
switch (day) {
  case "monday": // day === 'monday'
    console.log("monday: lecture");
    break;
  case "monday":
    console.log("tuesday: dancing");
    break;
  case "wednesday":
    console.log("wednesday: coding");
    break;
  case "thursday":
    console.log("thursday:reading");
    break;
  case "friday":
    console.log("friday");
    break;
  case "saturday":
    console.log("saturday: movie");
    break;
  case "sunday":
    console.log("sunday: sleeping");
    break;
  default:
    console.log("invalid day!");
}
*/

//-------Conditional ( Ternary ) Operator
// #1:
const age = 19;
age >= 18
  ? console.log("I can drink wine 🧂🥫")
  : console.log("I can drink water");
//#2:
const drink = age >= 18 ? "beer🥫" : "water🧂"; // right side: expression ; whole thing is a statement
console.log(drink);
//#3: very quick way
console.log(`I'd like to drink ${age >= 18 ? "wine🥫" : "water🧂"}`);

//  Statement and Expressions：Basic understanding
