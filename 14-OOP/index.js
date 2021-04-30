console.log("Hello");
// Object  oriented programming basic

/**ways of creating objects */
// #1 using literals: has issue when object has multiple functions
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw() {
    console.log("object is built by literals");
  },
};

circle.draw();

// #2.using  factories,return an object
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("object is built by factory");
    },
  };
}
const circle2 = createCircle(1);
circle2.draw();

// #3.using constructor: use this and new
function Circle(radius) {
  console.log("this", this);
  (this.radius = radius),
    (this.draw = function () {
      console.log("object is built by constructor");
    });
}

const circle3 = new Circle(1); // new create an {}, this point to this object,without new, it will point to global object(window)
circle3.draw();

/** object has constructor property */
//  new Object() vs literals
let obj = {}; //internally it will create let obj = new Object();
new String(); // '',"",``
new Boolean(); // true, false
new Number(); // 1,2,3,....

/** function is object  */
function Introduce(name) {
  (this.name = name),
    (this.call = function () {
      console.log("myname", this.name);
    });
}

const introduction = new Introduce("lp"); // new
introduction.call({}, "lp"); // this is what new does aove under the hood

const introduction2 = Introduce("lp"); // without new
// introduction2.call(window, "lp"); // this is what it does without new

/** Values vs Reference types */
// value types: Number,Boolean,String, undefined,null, symbol
// reference types: Object,Array,Function

//  assign primitive values to a variable,
let x = 10;
let y = x;
x = 20;
console.log("x", x, "y", y);

//  assign reference type to a variable
let x1 = { value: 10 };
let y1 = x1;
x1.value = 20;
console.log("x1", x1, "y1", y1);

//  how it works when pass it into parameters
// #1: primitive value
let number = 10;
function increase(number) {
  number++;
}
increase(number);
console.log(number); //10, numnber value(10) is copied to the local parameter number, the value of the parameter is changed, it independent from outside
// #2:reference type
let number2 = { value: 10 };
function increase2(number) {
  number.value++;
}
increase2(number2);
console.log(number2); // 11

/** Adding or Removing properties */
// Object is dynamic
function Painting(color) {
  this.color = color;
  this.draw = function () {
    console.log("draw");
  };
}

const paint = new Painting("yellow");
const paint2 = new Painting("blue");
//#1:  add properties
paint.shape = "round";
paint["location"] = { x: 10, y: 10 };
// bracket way is better when dynamic properties are needed
const propertyName = "speed";
paint[propertyName] = 2;

console.log("paint", paint);
console.log("paint2", paint2);
// #2: Remove peoperties
delete paint.location;

console.log("remove location", paint);

/** Enumerating peoperties */

for (let key in paint) {
  if (typeof paint[key] !== "function") console.log(key, paint[key]); //only bracket here will work
}
// get all the keys
const keys = Object.keys(paint); // array of keys
console.log(keys);
//  check if a property is in an Object
if ("color" in paint) {
  console.log("paint has a color");
}

/** Abstraction */
// hide some information from outside: hide the details, show essentials
function Square(size) {
  // local variables, not visible to outside
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimalLocation = function (factor) {
    // ....
  };

  //   this make it accessible from outside
  this.size = size;
  this.draw = function () {
    computeOptimalLocation(0.1);
    // defaultLocation
    // this.size
    console.log("draw");
  };
  /** Getters and Setters */

  this.getDefaultLocation = function () {
    return defaultLocation;
  };
  // create getters or setters function as property
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid location");
      }
      defaultLocation = value;
    },
  });
}

const square = new Square(1);
square.draw();
const defaultLocation = square.getDefaultLocation();
console.log(defaultLocation);
