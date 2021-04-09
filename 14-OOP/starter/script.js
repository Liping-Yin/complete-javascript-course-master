'use strict';
// ***************ways to create prototype**********
//Javascript doesn't have class definition like classic OOP

// -------------------- Prototype creation ----------------
// #1: constructor function
const Person = function (firstName, age) {
  this.firstName = firstName;
  this.age = age;
  console.log(this);
};

//  ------ Prototypes inheritance -------------
//  creat methods for the prototype
Person.prototype.calcAge = function () {
  console.log(this.age);
};
// create properties
Person.prototype.species = 'Homo Sapiens';

//1. new () is Created
//2.function is called, this = ()
//3. () linked to prototype
//4.function automatically return ()
const lp = new Person('Lp', 18);
lp.calcAge();
// try to understand all this relationship
console.log(lp.__proto__);
console.log(lp.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(Person)); //false
console.log(Person.prototype.isPrototypeOf(lp)); // true

// check inheritance properties and methods
console.log(lp.hasOwnProperty('firstName')); // true
console.log(lp.hasOwnProperty('species')); // false, it is inheritance
