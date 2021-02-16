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

// ----Spread operator:works on all iterables, even Objects

/*
const arr = [7, 8, 9];
const badArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArray);

const newArray = [1, 2, ...arr];
console.log(newArray);
console.log(...arr);
console.log(arr);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// application of spread
//#1. copy array (shallow copy )
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//#2. join arrays

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// iterables: array, string, map, set , but not object!
const str = 'apple';
const letters = [...str, ' ', 's.'];
console.log(letters);
// pass several  arguments into a function or built a new array; not work in template literals(since it doesn't expect multiple values separated by comma)
// console.log(`${...arr}`); // error

// pass several arguments
const ingredients = [
  prompt("let's make pasta! Ingredient 1?"),
  prompt("let's make pasta! Ingredient 2?"),
  prompt("let's make pasta! Ingredient 3?"),
];

console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// objects
const newRestaurant = { ...restaurant, founder: 'liping' };
console.log(newRestaurant);

// shallow copy objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Liping Copy';
console.log(restaurantCopy);
console.log(restaurant);
*/

// -----------------Rest Pattern and Parameters-------

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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
// opposite to the spread
//Spread: because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST: because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions:  // similar to the spread, but here it is Rest
// advantages: by doing so , users can pass several arguments or an array(if pass array, can spread first)
const add = function (...numbers) {
  console.log(numbers); // array
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 6, 7, 8);
add(2, 5, 7, 8, 9, 40, 45);

const x = [23, 4, 5, 6];
add(...x); // SPREAD first then REST

// pass REST arguments make it much easier and flexible to use
restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

restaurant.orderPizza('mushroom');

// ------------ Short Circuiting (&& and ||)---------------
/*
// Use ANY data type, return ANY data type, short-circuiting

console.log('----------OR-------------');
// return first truthy value（ignore the rest）, if no then truthy value, then return last value
console.log(3 || 'test'); //  3 : truthy value
console.log('' || 'test'); // test
console.log(true || 0); // true
console.log(undefined || null); // null , even though null is not truthy value

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello'

// #1: normal way to deal with:
const guest = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest);

// #2: use short-circuit
console.log(restaurant.numGusts || 10);

console.log('----------AND-------------');
//  find the first falsy value, if no falsy value then return last value
console.log(0 && 'test'); // 0
console.log(true && 'test'); // test

// ------- Nullish coalescing Operator

// nullish : null and undefined (not include 0 and '')

// potential issue of using OR: '||'
restaurant.numGuests = 0;
const guest2 = restaurant.numGuests || 10;
console.log(guest2); // 10, since 0 is falsy value

// modify
// ??: find the first not (null or '') value, similar as or
const correctGuest = restaurant.numGuests ?? 10;
console.log(correctGuest); // 0
*/

// Challenge: football betting app

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  odds: { team1: 1.33, x: 3.25, team2: 6.5 },
  date: 'Nov 9th, 2021',
};

const [players1, players2] = game.players;

const [gk1, ...fieldplayers1] = players1;
const [gk2, ...fieldplayers2] = players2;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
