'use strict'; // use strict mode to write secure codes
/** 
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

//-------------Functions calling other Functions

function fruitProcessor(apple, orange) {
  console.log(apple, orange);
  const juice = `juice with ${apple} apples and ${orange} oranges.`;
  return juice;
}



//--------------- Data structures--------------------
// most used : Array and Object

// --  Arrays
// definition / initiate
const friends = ["Same", "Lin", "Green"];
const years = new Array(1990, 1993, 1992);

console.log(friends, years);
console.log(friends[0]);
console.log(friends[friends.length - 1]); // last element

// change element of array
// Remark: even though use const, but since only primitive type of variable with const is immutable, Array is not a primitive type
// but can't replace the whole array with new value, only element can be revised

friends[0] = "Jay";
console.log(friends);

const firstName = "Liping";
const liping = [firstName, "yin", 1989]; // with different types
console.log(liping);


//Exercise
const calcAge = function (birthYear) {
  return 2021 - birthYear;
};
const years = [1990, 1991, 1990];
// years + 1     // >> String ' 1990,1991,19901'
// years - 1   // >> NaN
console.log(calcAge(years[0]));

// --- --Array Operations(methods)
// Add element
const newLength = years.push(1992); // add an element in the end, and return the new length of array
console.log(years);
console.log(newLength);

years.unshift(1980); // add in the beginning
console.log(years);

// Remove
const lastElement = years.pop(); // remove last, and return it
console.log(years);
console.log(lastElement);

years.shift(); // remove the first element
console.log(years);

console.log(years.indexOf(1999)); // not exist -1
console.log(years.indexOf(1990)); // index of first existing

console.log(years.includes(1999));
console.log(years.includes(1990));

if (years.includes(1989)) {
  console.log(" I have a friend who is born in 1989");
} else {
  years.push(1989);
  console.log("I want to make a friend who is born in 1989");
}

console.log(years[years.length - 1]);


// ---------------- Objects
// ------define / initiate
// for unstructured data
const liping = {
  firstName: "Liping",
  lastName: "Yin",
  title: "student",
  age: 10,
  pets: ["dog", "cat"],
};

// get element
console.log(liping.age);
console.log(liping["firstName"]);

const nameKey = "Name";
console.log(liping["first" + nameKey]);

//Exercise
// different between dot and bracket way
const interestIn = prompt(
  "what do you want to know about me?choose between firstName, lastName, age"
);
console.log(liping.interestIn); // undefined -> falsy value
console.log(liping[interestIn]); // correct way

if (liping[interestIn]) {
  // check the input is not undefined
  console.log(liping[interestIn]);
} else {
  console.log("Wrong request! Please enter the right choice");
}

// add element
liping.location = "Twente";
liping["country"] = "China";
console.log(liping);

// Challenge
// . precedes []
console.log(
  `${liping.firstName} has ${liping.pets.length} pets, and the first pet is ${liping.pets[0]}`
);


// ------ Object methods

const sam = {
  firstName: "Sam",
  lastName: "Smith",
  title: "Engineer",
  birthDay: 1990,
  hasDriverLicense: true,
  pets: ["dog", "cat"],
  // this is very useful point to current object: to keep code dry, don't repeat codes as muc as possible
  calcAge: function () {
    // console.log(this);
    this.age = 2037 - this.birthDay;
    return this.age;
    // return 2037 - this.birthDay;
  }, // object methods, similar as other property but it holds a function as value.
  getSummary: function () {
    return `${this.firstName} is a ${this.age} year old ${
      this.title
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license. `;
  },
};
// call object function
console.log(sam.calcAge());
console.log(sam["calcAge"]());

// Challenge:

// make code more efficient !!!!!
// when a command need to call an object method multiple times, try to store related value in a variable(attribute), reach the property is faster

// call the method many times
// console.log(same.calcAge());
// console.log(same.calcAge());
// console.log(same.calcAge());
// improve: store return result in object attribute, and call this attribute instead of method every time.
console.log(sam.calcAge());
console.log(sam.age);
console.log(sam.age);
console.log(sam.age);

// Challenge:

// console.log(
//   `${sam.firstName} is a ${sam.age} year old ${sam.title}, and he has ${
//     sam.hasDriverLicense ? "a" : "no"
//   } driver's license. `
// );

console.log(sam.getSummary());



// ------------Iteration: for loop
// for loop keeps running while condition is true
for (let i = 1; i <= 10; i++) {
  console.log(`lift weight repetition ${i}`);
}

// ---Looping Arrays, Breaking and Continuing
const types = [];
const myArray = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
  // types[i] = typeof myArray[i];
  types.push(typeof myArray[i]);
}

console.log(types);

const years = [1990, 1991, 1992];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("------only years larger than 1990----------");
for (let i = 0; i < years.length; i++) {
  if (years[i] < 1991) continue;
  console.log(years[i]);
}

console.log("----------Break with 1990--------------");
for (let i = 0; i < years.length; i++) {
  if (years[i] > 1991) break;
  console.log(years[i]);
}

// ----Loop backwards and Loops in Loops
const me = ["liping", "yin", 2039 - 1989, "single", ["cat", "dog"]];
// start:condition:update
for (let i = me.length - 1; i >= 0; i--) {
  console.log(me[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------Start Exercise ${exercise} `);

  for (let i = 1; i < 5; i++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${i}`);
  }
}

//---------While Loop------------
// when don't know how many rounds the loop needs, use while loop

let i = 0;
while (i < 6) {
  console.log(i);
  i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1; // always remember to add update, careful with infinite loop
  if (dice === 6) {
    console.log("loop is about to end.......");
  }
}
*/
