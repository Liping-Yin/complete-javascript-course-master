'use strict';
// ============ default parameters ===============
const bookings = [];
const creatbooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger // when use this the parameter order matters
) {
  // ES5
  //   numPassenger = numPassenger || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
creatbooking('LH123');
creatbooking('Lk122', 2, 500); //overwrite default parameters
creatbooking('Lk122', undefined, 500);

// =================== passing values vs. Reference =======
// ======== First-class and Higher-order functions

// +++First-class
//functions are values, just another type of 'object'

//1.store functions in variables or properties
const func = (a, b) => a + b;
const obj = {
  value: 12,
  func: function () {
    this.value++;
  },
};

//2. pass functions as arguments to OTHER functions
function greet() {
  console.log('hey');
}
const arrowFunc = () => console.log('arrow function');

const btn = document.querySelector('.buy');
btn.addEventListener('click', arrowFunc);

//3. return function From another function
//4. call methods on functions

// +++ Higher-order
// 1.function that receive another function
btn.addEventListener('mouseover', greet);
//2.function that returns new function
function count() {
  let counter = 0;
  return function () {
    counter++;
  };
}
/*
// =================== Callback ======================
function greet(name) {
  return `Hello ${name}!`;
}

const persons = ['Christina', 'Ana'];
const messages = persons.map(greet); // higher-order function invoke callback function
console.log(messages);

// implement callback by ourself
function newMap(arr, callback) {
  const mappedArray = [];
  for (const item of arr) {
    mappedArray.push(callback(item));
  }
  return mappedArray;
}

function sayHello(name) {
  return `Hello ${name}`;
}

const hellos = newMap(persons, sayHello);
console.log(hellos);

// #1: synchronous callback: executed during the execution of the higher-order function that uses the callback. the callback is blocking: higher-order function doesn't complete it execution until the callback is done executing
// most used are array method: array.map(callback),array.forEach(callback),array.find(callback),array.reduce(callback),array.filter(callback);

// forEach
const fruits = ['apple', 'banana'];
fruits.forEach(function callback(fruit) {
  console.log(` each ${fruit} is good`);
});

//map
fruits.map(function callback(fruit) {
  console.log(` map ${fruit}`);
});

//find
const nameStartingA = fruits.find(function callback(fruit) {
  return fruit[0].toLowerCase() === 'a';
});

console.log(nameStartingA);

//reduce
const countStartingA = fruits.reduce(function (count, fruit) {
  const starsA = fruit[0].toLowerCase() === 'a';
  return starsA ? count + 1 : count;
}, 0);
console.log(countStartingA);

//replace
const person = 'Christina';
const newPerson = person.replace(/./g, function (char) {
  return char.toLowerCase() === 'i' ? '1' : char;
});
console.log(person);
console.log(`new: ${newPerson}`);

// asynchronous: executed after higher-order : non-blocking
console.log('setTimeout() starts');
setTimeout(function later() {
  console.log('later() called');
}, 2000);
console.log('setTimeout() finished');
// result: setTimeout() complete execution, then later() is executed

// Examples:
setTimeout(function later() {
  console.log('2 second have passed!');
}, 2000);

setInterval(function repeat() {
  console.log('Every 2 seconds');
}, 2000);
const myBuy = document.querySelector('.buy');
myBuy.addEventListener('click', function () {
  console.log('clicked!');
});
*/

/*
// ===== Function return function ===========
const greeting = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greeting('Hey');
greetHey('John');
greetHey('call me again');

greeting('Hey')('again');

// challenge
const greetArrow = greeting => name => {
  console.log(`${greeting} ${name}`);
};
greetArrow('arr hello')('arrow name');
*/

// ============ call and apply ===========
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${flightNum} ${this.iataCode}`, name });
  },
};

lufthansa.book(221, 'Sam smith');
console.log(lufthansa);
