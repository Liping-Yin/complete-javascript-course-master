'use strict';
// ***************ways to create prototype**********
//Javascript doesn't have class definition like classic OOP

// -------------------- Prototype creation ----------------
// #1: constructor function
const Person = function (firstName, age) {
  // instance properties
  this.firstName = firstName;
  this.age = age;
  console.log(this);

  // not good convention to add functions directly here
  // this.dance = function () {
  //   console.log('bear is dancing');
  // };
};

// use new operator to call constructor function
//1. new {} is Created
//2.function is called, this = {}
//3. {} linked to prototype
//4.function automatically return {}
const icylove = new Person('icylove', 3);
console.log(icylove);
console.log(icylove instanceof Person);

//  ------ Prototypes inheritance -------------
// prototypes

//  creat methods for the prototype
Person.prototype.calcAge = function () {
  console.log(this.age);
};
// create properties
Person.prototype.species = 'Toy';

// console.log(Person);
console.log(Person.prototype);

// try to understand all this relationship
console.log(Object.getPrototypeOf(icylove));
console.dir(Person.prototype.constructor);
console.log(icylove.__proto__);
console.log(icylove.__proto__.__proto__);

console.log(icylove.__proto__ === Person.prototype); // true: this step is realized by the link
console.log(Person.prototype.isPrototypeOf(Person)); //false
console.log(Person.prototype.isPrototypeOf(icylove)); // true

// check inheritance properties and methods

console.log(icylove.hasOwnProperty('firstName')); // true, in the constructor
console.log(icylove.hasOwnProperty('species')); // false, it is inheritance

// #2：ES6 Classes
// #3: Object.create()
