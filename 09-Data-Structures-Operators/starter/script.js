'use strict';
/*

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/

//--------------  Destructuring Arrays -----------------
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [1, 2, 4];
// assign one by one
const a = arr[0];
const b = arr[1];
const c = arr[2];

// assign in a line: looks like an array but it is not
const [x, y, z] = arr; // destructuring assignment
console.log(x, y, z);
console.log(arr); // destructuring will not destroy the original array

let [first, , third] = restaurant.categories; // can only get part of the elements by destructuring
console.log(first, third);

// ------------ useful tricks:
// switch variables
// let temp = first;
// first = third;
// third = temp;
// console.log(first, third);

//#1: much easier way to do switch by using destructing
[first, third] = [third, first];
console.log(first, third);

//#2: receive two return values from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// nested destructuring
const nestArray = [1, 4, [7, 8]];
const [i, , j] = nestArray;
console.log(i, j);

//destructuring inside a destructuring
const [i1, , [i31, i32]] = nestArray;
console.log(i1, i31, i32);

// Default values
const [p, q, r] = [8, 9]; // third one is undefined
const [p1 = 1, q1 = 1, r1 = 1] = [8, 9]; // default value with 1 if not assigned
console.log(p, q, r);
console.log(p1, q1, r1);

*/

//--------------  Destructuring Objects -----------------
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // pass an object into parameters
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

  //useful hacks!! :  several parameters:destructuring this object, only require the same parameter's name, or even set the default value
  orderDelivery: function ({
    time = '12:00',
    address = 'sam dhe sd 120',
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del se 231',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del se 231',
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// useful to when deal with third party data: API
// change the variable names
const { name: newName, openingHours: hours, categories: tags } = restaurant;

console.log(newName, hours, tags);
// set default value and change name
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 34 };
// {a,b} = obj // error,since with curly bracket, javascript will expect code block inside
({ a, b } = obj); // wrapped in a parenthesis
console.log(a, b); // overwrite initial values

// Nested Objects

const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

*/

// Spread operator
const arr = [7, 8, 9];
const badArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArray);

const newArray = [1, 2, ...arr];
console.log(newArray);
