'use strict';
// ***************ways to create prototype**********

/*
//Javascript doesn't have class definition like classic OOP

// -------------------- Prototype creation ----------------
//////////// #1: constructor function /////////////////////

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


/////////////////////////////////////////////

// Coding challenge#1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const carBMW = new Car('BMW', 120);
const carMercedes = new Car('Mercedes', 95);
carBMW.accelerate();
carBMW.accelerate();
carBMW.brake();

carMercedes.accelerate();
carMercedes.brake();
*/

/////////////////// #2：ES6 Classes ////////////////////
// 1: class expression
//const PersonCl = class {};//class is a specail function
// 2: class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // all properties written outside the construcotr will be in the prototype

  dance() {
    console.log('bear is dancing');
  }
}

const icyloveCl = new PersonCl('icylove', 2019);
console.log(icyloveCl);
console.log(icyloveCl.hasOwnProperty('dance'));
console.log(icyloveCl.hasOwnProperty('birthYear'));
console.log(icyloveCl.__proto__ === PersonCl.prototype);

// Attentions:
/**
 * 1.Classes are NOT hoisted, so have to declare first before use it
 * 2.Class are firt-class citizens
 * 3.Classes are executed in strict mode
 */

// every object can have its own getter and setter properties, not like a methods, when you call it
const account = {
  owner: 'icylove',
  movements: [200, 250, 300, 100],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // get
account.latest = 50; // set
console.log(account.movements);

class Toy {
  // avoid confliction: set a property that already exists
  // validation
  constructor(fullName, age) {
    this.fullName = fullName;
    this.age = age;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full fullName`);
  }
  get fullName() {
    return this._fullName;
  }
}

const cat = new Toy('icylove bear', 3);
const fox = new Toy('fox', 4);

// cat.fullName = 'icylove the cat';
console.log(cat);
console.log(fox);
// console.log(cat.fullName);
// console.log(cat.name);
// console.log(cat._name);

//////////////////// #3: Object.create() //////////////
