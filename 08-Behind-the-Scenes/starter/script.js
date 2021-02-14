'use strict';

// javascript is a high-level, object-oriented, multi-paradigm programming language.
// - high level
//- garbage - collected
// - Integrated or just-in-time compiled
//- Multi-paradigm:
/**
 * 1.Procedural programming
 * 2.Object oriented programming
 * 3.functional programming
 */

//- Prototype-based object-oriented
//- first-class function: functions are simply treated as variables
//- Dynamic
//- Single-threaded
//Non-blocking even loop

// ----------------This Keyword-------------

// this is not static, it depends on how the function is called, and its value is only assigned when the function is actually called.
// this does NOT point to the function itself, and also NOT to its variable environment
// 1. Method: this =<object that is calling the method>
//2. Simple function call: this = undefined. (only in strict model, otherwise it is window)
//3. Arrow function: this = <this of surrounding function(lexical this)>
// 4.Even listener: this = <DOM element that the handler is attached to>
//5. new,call,apply, bind...

/** 

console.log(this);

// in strict mode

const calcAge1 = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this);
};
calcAge1(1989); // undefined, since this function is not assigned to any variable

// Arrow function: use it parent scope
const calcAge2 = birthYear => {
  console.log(2021 - birthYear);
  console.log(this); // window scope since in this case , it is the parent
};
calcAge2(1990);

// Method calls: owner of method
const lp = {
  year: 1989,
  calcAge: function () {
    // return 2021 - this.year;
    console.log(this);
    console.log(2021 - this.year);
  },
};

lp.calcAge(); // lp calls the method, so this points to object of lp

const matilda = {
  year: 1990,
};
matilda.calcAge = lp.calcAge;
matilda.calcAge(); // matilda call the method

const f = lp.calcAge;
f(); // undefined : error


//---------regular functions vs Arrow functions
const sasha = {
  firstName: 'Sasha',
  year: 1989,
  calcAge: function () {
    // return 2021 - this.year;
    console.log(this);
    console.log(2021 - this.year);
  },

  // good convention is don't use an arrow function as method,just use normal function
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  }, // still in the global scope
};

sasha.greet(); // undefined
sasha.calcAge(); // sasha

//--------Argument keywords: not in modern javascript any more
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5, 3, 8, 10); // it gives a list of arguments,

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 6, 7); // error, arguments is not defined



//---------------- Primitive vs. Objects(primitive vs. Reference types)
// Javascript engine: Call stack, Heap

// Primitive types: memory storage
//Number, String, Boolean, Null, Undefined,Symbol,BigInt
let age = 12; // identifier (age) points to the memory address which stores the value 30, but nor the value itself.
let oldAge = age; // oldAge points to the same address as age
age = 31; // a new address is created for age

console.log(age); //31
console.log(oldAge); // 12

// Object: reference to memory address in Heap
// Object literal, Arrays, Functions, Others.....

const me = {
  name: 'liping',
  age: 30,
};

const friend = me;
friend.age = 20; // reassign the age

console.log('Friend', friend); // age:20
console.log('Me', me); // age: 20
*/

// Exercises:
// primitive type
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);
//reference type
const jessica = {
  firstName: 'Jessica',
  lastName: 'William',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Smith';
console.log(jessica, marriedJessica);

// copy object without influence original one
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'William',
  age: 27,
  family: ['Father', 'Mother', 'sister'],
};
const jessicaCopy = Object.assign({}, jessica2); // but it is shallow copy, only copy property in first level; should use deep clone.

jessicaCopy.lastName = 'Davis'; // first level won't change both
jessicaCopy.family.push('son'); // both change
console.log('before marriage:', jessica2);
console.log('after marriage:', jessicaCopy);
