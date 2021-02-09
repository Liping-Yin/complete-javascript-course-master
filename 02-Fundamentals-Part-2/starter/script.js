"use strict"; // use strict mode to write secure codes
/*
// -------- Functions
function logger() {
  console.log("My log function");
}
//calling/invoking/running a function
logger();
// parameters vs arguments
function fruitProcessor(apple, orange) {
  // parameter -> placeholder in a function
  console.log(apple, orange);
  const juice = `juice with ${apple} apples and ${orange} oranges.`;
  return juice;
}
console.log(fruitProcessor(5, 0));


// ---- Function Declaration vs Expression
// Which to use depends on your personal preference and coding organizing.

// declaration: can be called in a plcace before where it is declared !
function calcAge(birthYear) {
  return 2021 - birthYear;
}
const age = calcAge(1990); // argument
console.log(age);

// Expression: can't be called in a place before the expression, since it is not initiated like any other variable (value)
const calcAge2 = function (birthYear) {
  // anonymous function (a function without a name)
  return 2021 - birthYear;
}; // assign a function(value) to a variable

const age2 = calcAge2(1990); // same way to call
console.log(age2);


// Arrow Function
//eg #1:
const calcAge3 = (birthYear) => 2021 - birthYear; // another way of possibly omitting return or {}
const age3 = calcAge3(1990);
console.log(age3);

//eg #2:
const yearsUntilRetire = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetire(1991, "John"));
*/

//-------------Functions calling other Functions

function fruitProcessor(apple, orange) {
  console.log(apple, orange);
  const juice = `juice with ${apple} apples and ${orange} oranges.`;
  return juice;
}
