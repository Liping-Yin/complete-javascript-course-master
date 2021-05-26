// -------------- LOOP ---------------

/** Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

/** Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 */
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

// --------------------- Functions ------------------

/** 
//  return minimum number
function min(num1, num2) {
  return num1 <= num2 ? num1 : num2;
}

console.log(min(1, 10));

// recursion
function isEven(number) {
  if ((number = 0)) {
    return true;
  } else if (number == 1) {
    return false;
  } else if (number < 0) {
    return isEven(-number);
  } else {
    return isEven(number - 2);
  }
}
console.log(isEven(2));

// growing functions: count Bs
function countChar(string, ch) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      count += 1;
    }
  }
  return count;
}

function countBs(string) {
  return countChar(string, "B");
}

*/

// -----------Data Structures : Objects and Arrays --------
// SUM OF A RANGE
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }

  return array;
}

function sum(arr) {
  let total = 0;
  for (let i of arr) {
    total += i;
  }
  return total;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

// REVERSE AN ARRAY
function reverseArray(arr) {
  let newArray = [];
  for (let element of arr) {
    newArray.unshift(element);
  }
  return newArray;
}

// function reverseArray(arr) {
//   let output = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     output.push(arr[i]);
//   }
//   return output;
// }

function reverseArrayInPlace(arr) {
  const middlePoint = Math.floor(arr.length / 2);
  for (i = 0; i < middlePoint; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3]));
console.log(reverseArrayInPlace(["a", "b", "c"]));

// A LIST
