// <------------------prototype --------------->

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;

// }

// const zilen = new Person("Zilen Modi", 2001)
// console.log(zilen);

// const om = new Person("Om Hajariwala", 2000)
// console.log(om);

// //function and prototype
// Person.prototype.calAge = function (currYear) {
//     console.log(currYear - this.birthYear);
// }

// zilen.calAge(2023)
// console.log(zilen.__proto__ === Person.prototype); //true
// console.log(Person.prototype.isPrototypeOf(zilen)); //true

// Person.prototype.cast = "OBC"
// console.log(zilen.cast);

//cast and calAge is not own property of object, it is property of prototype.

//object of contructor function is creates __proto__: and it will points to Person.prototype and it will points to Object.prototype. Its known as prototype chaining.

/*

The new operator

step 1: Create an empty object is created. {}

step 2: assign this keyword in constructor function with new object.

step 3: new object linked with constructor function's prototype property.

step 4: new object will returned from the constructor function.

=> constructor function linked with object's prototype property.

zilen will try to find property in parent's prototype like scope chain <=> prototype chain

*/

// console.log(zilen.__proto__.__proto__); //pointing to object => null

// const arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr.__proto__); //gives all the methods of the Array constructor function.

// console.log(arr.__proto__ === Array.prototype); //true

// console.log(arr.__proto__.__proto__) //Object

// <----------------------------------------------------------->


// <------------Class-------------->

//class expression
// const Person = class {}

//class Declaration
// class Person {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     // create this function in as new object and pointed by object's __prototype.
//     calAge = function (currYear) {
//         console.log(currYear - this.birthYear);
//     }
// }

// const zilen = new Person("Zilen Modi", 2001)
// console.log(zilen);

// const om = new Person("Om Hajariwala", 2000)
// console.log(om);

// // Static method ***
// // Person.greet = function () {
// //     console.log("hey ", this.firstName);
// // }

// // Person.greet()
// // zilen.greet() //zilen.greet is not a function error
// // ****

// //***** Right
// Person.prototype.greet = function () {
//     console.log("hey", this.firstName);
// }

// // Person.greet()
// zilen.greet()
// //*****


// zilen.calAge(2023)
// console.log(zilen.__proto__ === Person.prototype); //true
// console.log(Person.prototype.isPrototypeOf(zilen)); //true

// Person.prototype.cast = "OBC"
// console.log(zilen.cast);

/*

1. class not hoisted.
2. class are first-class citizens
3. classes are executed in strict mode

*/

//Way 3 object.create()

// const Person = {
//     calAge(currYear) {
//         console.log(currYear - this.birthYear)
//     },
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// const zilen = Object.create(Person)
// zilen.init("Zilen", 2001)
// zilen.calAge(2023)

// <-----------------Inheritance CF--------------->

// const Vehical = function (maxSpeed, average, color) {
//     this.maxSpeed = maxSpeed;
//     this.average = average;
//     this.color = color;

// }

// const TwoWheel = function (maxSpeed, average, color, isGearless) {
//     Vehical.call(this, maxSpeed, average, color);
//     this.isGearless = isGearless
// }

// TwoWheel.prototype.introduce = function () {
//     console.log("Max speed", this.maxSpeed);
//     console.log("Average", this.average);
//     console.log("Color", this.color);
//     console.log("Is Gear Less?", this.isGearless);
// }

// const activa = new TwoWheel(100, 60, "White", true)
// activa.introduce()

// const FourWheel = function (maxSpeed, average, color, totalGear) {
//     Vehical.call(this, maxSpeed, average, color);
//     this.totalGear = totalGear
// }

// FourWheel.prototype = Object.create(Vehical.prototype) //linking with parent prototype

// FourWheel.prototype.introduce = function () {
//     console.log("Max speed", this.maxSpeed);
//     console.log("Average", this.average);
//     console.log("Color", this.color);
//     console.log("Gear box", this.totalGear);
// }

// const hondaCity = new FourWheel(240, 18, "Grey", 6)
// hondaCity.introduce()

// // console.log(hondaCity.__proto__); // Vehical {introduce: ƒ}
// // console.log(hondaCity.__proto__.__proto__); //{constructor: ƒ}
// // console.log(hondaCity.__proto__.__proto__.__proto__); //object




// <-------------Inheritance in Class----------------->

// class Vehical {
//     constructor(maxSpeed, average, color) {
//         this.maxSpeed = maxSpeed;
//         this.average = average;
//         this.color = color;
//     }
// }

// class TwoWheel extends Vehical {
//     constructor(maxSpeed, average, color, isGearLess) {
//         super(maxSpeed, average, color);
//         this.isGearLess = isGearLess
//     }

//     introduce() {
//         console.log("Max speed", this.maxSpeed);
//         console.log("Average", this.average);
//         console.log("Color", this.color);
//         console.log("Is Gear Less?", this.isGearLess);
//     }
// }

// const activa = new TwoWheel(100, 60, "White", true)
// activa.introduce()

// console.log(activa);

// <---------------Object.create()--------------->

// const Vehical = {
//     init(maxSpeed, average, color) {
//         this.maxSpeed = maxSpeed;
//         this.average = average;
//         this.color = color;
//     }
// }

// const TwoWheel = Object.create(Vehical)

// TwoWheel.init = function (maxSpeed, average, color, isGearLess) {
//     Vehical.init.call(this, maxSpeed, average, color)
//     this.isGearLess = isGearLess
// }

// TwoWheel.introduce = function () {
//     console.log("Max speed", this.maxSpeed);
//     console.log("Average", this.average);
//     console.log("Color", this.color);
//     console.log("Is Gear Less?", this.isGearLess);
// }

// const activa = Object.create(TwoWheel);

// activa.init(110, 55, "White", true)
// activa.introduce()

