'use strict';

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

// ===============Detructing============================

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

//-----------------Destructuring Object-----------------
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

// --------------------Spread operator--------------------
//works on all iterables, even Objects

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

/*

// --------------- Rest Pattern and Parameters ----------

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

*/

/**
// ============ Short Circuiting (&&, ||,??)=============

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


console.log('---------- ?? -------------');
//  Nullish coalescing Operator
//  Nullish : null and undefined (not include 0 and '')

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
/*
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

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals('Davis', 'Muller', 'Lewis');
printGoals('Davis', 'Muller');
printGoals(...game.scored);

// use short circuit instead of if...else

team1 < team2 && console.log('team1 is more likely to win');
team1 > team2 && console.log('team2 is more likely to win');
*/
/*
//=======================Looping =========================
// ----- Looping Arrays: for-of Loop

const items = [1, 2, 3, 4, 5];
for (const item of items) console.log(item); // element
for (const item of items.entries()) {
  console.log(item); // element and index of each element
  // console.log(item[0]); // index
  // console.log(item[1]); // element value
}
//use destructure for convenience !!!

for (const [index, ele] of items.entries()) {
  console.log(`${index + 1}: ${ele}`);
}

// ------Enhanced Object Literals

// #3：compute property names
const weekdays = ['mon', 'tue', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[2]]: {
    open: 0,
    close: 22,
  },
  [weekdays[3]]: {
    open: 10,
    close: 23,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day - ${2 + weekdays[4]}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // #1： ES6: Enhanced Object literals
  openingHours,

  // #2： enhanced way for function
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // #3：compute property names
};
console.log(restaurant);
console.log(restaurant.order(0, 1));
console.log(restaurant.openingHours);

// ----Optional Chaining
//normal ways to check an element exist
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
} // not return anything when undefined or null

// optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

if (!restaurant.openingHours?.mon?.open) {
  console.log("they doesn't exist");
}

// examples
//#1.
const days = ['mon', 'tue', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // here use variable as a property should use [], not '.'
  // since here day is not an actual property name, it is a variable
  // const open = restaurant.openingHours[day]?.open || 'closed'; // even set a default value when undefined.
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // use ?? to avoid error when open = 0(falsy value if use ||)
  console.log(`on day ${day}, we are open at ${open}`);
}

// #2.check if methods exists

console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist");

// #3. Arrays
const users = [{ name: 'Sam', email: 'jsgdjs@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty');

// const alter = 2 < 3 ? 'y' : 'n';
// console.log(alter);

// -----------Looping Objects: Object keys, values, and Entries
// even though Object is not iterable

// ..keys
const properties = Object.keys(openingHours);
console.log(properties);
console.log(`we are open for ${properties.length} days`);
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// ..values
const values = Object.values(openingHours);
console.log(values);
//.. Entries: useful combination with destructuring
const entries = Object.entries(openingHours);
console.log(entries);
// for (const i of entries) {
//   console.log(i);
// }
for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}

*/

// Challenge #2.

// ------------------- Set -------------------------------
// unique values
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'pizza']);
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('pizza'));
orderSet.add('Pizza'); // ignored the same element
orderSet.delete('pizza');
console.log(orderSet);
// iterate set ?
// normally there is no need to get element out of set, we only check if an element is in the set.
// instead we normally iterate array

console.log();

for (const order of orderSet) {
  console.log(order);
}
console.log(new Set('Johnas'));

// combine set and arrays: into practice
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager'];
const staffUnique = [...new Set(staff)]; // spread

console.log(new Set(staff).size);

console.log(new Set('Johnason').size);

// ------------------ Map --------------------
const rest = new Map();
rest.set('name', 'Classico Italiano'); // key, value
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

console.log(rest.set(3, 'Beijing, China'));
console.log(rest);

// alternate: chain
rest
  .set('categories', ['Italian', 'Creek', 'Chinese'])
  .set(true, 'we are open')
  .set(false, 'we are not open :(')
  .set('open', 11)
  .set('close', 23);

console.log(rest.get(true));
console.log(rest.get('open'));
console.log(rest.get('name'));

// interesting example
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete('name');
console.log(rest.size);

// when use an array as key
const arr = [1, 2];
rest.set(arr, 'Test');
// rest.set([1,2],'Test');
//rest.get([1,2])// this won't work, since [1,2] is not the same object as before [1,2]; two different object in the heap

console.log(rest.get(arr));
const ele = document.querySelector('h1');
rest.set(ele, 'Heading');
console.log(rest.get(ele));

// Initiate map
//#1. array of arrays
const question = new Map([
  ['question', 'what is the correct answer？'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Python'],
  ['correct', 2],
  [true, 'correct'],
  [false, 'Try again'],
]);

console.log(question);

//convert object to a map
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// show the whole question and answer
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}; ${value}`);
}
3;
const answer = prompt('what is your answer?');
// always pay attention to the input type
console.log(answer);

console.log(question.get(question.get('correct') === Number(answer)));

// convert Map to Array

console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
