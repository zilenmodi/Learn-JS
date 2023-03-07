// "use strict";

// function xyz() {
//     let ans;
//     console.log("XYZ Function");
//     print()
//     ans = 20
//     return ans;
// }

// const print = (text) => {
//     var res = 10;
//     console.log(text);
//     return res;
// }



// let a = 10
// let b = xyz();
// var c;

// console.log(b);

// let a = 10
// const b = 20
// var c = 30

// {
//     a = 110
//     // b = 120
//     c = 130
// }

// console.log(a, b, c);

// console.log(typeof window == "object");


// console.log("10" + 20 + 30);

// console.log('10' - 2 + '1' == 81);

// function() {} 

// function a() {
//     console.log("Function-declaration a");
//     console.log(this);
// } //function-declaration

// const b = function () {
//     console.log("Function-expression b");
//     console.log(this);
// } //function-expression

// const c = () => {
//     console.log("Arrow-function c");
//     console.log(this);
// }  //arrow-function



// console.log(c instanceof Object); //true

// console.log({} === {}); //false

// console.log([] === []); //false

// console.log((function () { }) == (function () { })); //false

// -------------

// - And just like a normal objects, you can add new properties to the object:
// - This makes functions a first - class citizen, because it can be passed around, as arguments into other functions, just like any other objects could.
// a.firstName = "Sheetal"
// console.log(a.firstName);

// a.func = c;
// console.log(a.prototype);


// --------------------
// this in function

// a()
// b()
// c()


// function func1() {
//     console.log(this);
// }

// const func2 = () => {
//     console.log(this);
// }

// func1()
// func2()

// const obj1 = {
//     name: "Zilen",
//     func1: function () {
//         console.log(this);
//         // { name: 'Zilen', func1: ƒ }
//     }
// }

// const obj2 = {
//     name: "Sheetal",
//     func1: () => {
//         console.log(this);
//         // Window { window: Window, self: Window, document: document, name: '', location: Location, … }
//     }
// }

// obj1.func1()
// obj2.func1()



// const obj1 = {
//     name: "Zilen",
//     year: 2001,
//     func1: function () {
//nothing <-> no variable
//         function temp() {
// console.log(obj1.name)
//             console.log(this); //this pointing to nothing
//         }
//         temp()
//     }
// }

// Solution 1: use self = this
// const obj1 = {
//     name: "Zilen",
//     year: 2001,
//     func1: function () {
//         let self = this  //variable pointing to obj1
//         function temp() {
//             console.log(self);
//         }
//         temp()
//     }
// }

// //Solution 2: use arrow function because its use parent this.
// const obj2 = {
//     name: "Sheetal",
//     year: 2000,
//     func1: function () {

//         const temp = () => {
//             console.log(this); //this pointing to obj2
//         }
//         temp()
//     }
// }

// obj1.func1()
// obj2.func1()

// {
//     let a =10
// }


// < --------------- scope and call stack relation------------------>

// const myName = "Zilen"  //script scope

// function first() {
//     const age = 35  //local of function scope

//     if (age >= 30) {
//         const decade = 3; //block scope
//         var avalue = true; //global of parent,****we can access in first

//         function add(a, b) {
//             console.log(a + b);
//         }
//     }
//     console.log(avalue); //<-- catch ********
//     add(2, 3)

//     function second() {
//         //first() function is closure of second()
//         const job = "SDE"
//         console.log(`${myName} is a ${age} ${job}`);
//     }
//     second()
// }

// first()

// <------------function is not block scope------------->
// {
//     function add(a, b) {
//         console.log(a + b);
//     }
// }
// add(2, 3)



// <----------hoisting--------------->

// console.log(x);
// console.log(y); //ReferenceError: Cannot access 'y' before initialization <<TDZ>>
// console.log(z); //Missing initializer in const declaration <<TDZ>>

// var x;
// let y;
// const z;


// console.log(x); //undefined
// console.log(y);
// console.log(z);

// var x = 10;
// let y = 20; //ReferenceError: Cannot access 'y'
// const z = 30; //TDZ

// let a = 10
// {
//     const a = 20
// }

// <------------hoisting function ------------>

// a()
// b()  //Cannot access 'b' before initialization
// c()  //Cannot access 'c' before initialization

// function a() { } //function-declaration <-> function statement

// const b = function () { } //function-expression

// const c = () => { }  //arrow-function

// <------------- default parameters ---------------->

//old way

// let bookings = []

// function addDetails(trainNumber, numberOfPassengers = 1, price = 199 * numberOfPassengers) {

//     const booking = {
//         trainNumber, numberOfPassengers, price
//     }
//     bookings.push(booking)
// }

// addDetails(19033, 2)
// console.log(bookings);


// <-------------- first class and higher order function ------------>

// -> function value is known as first class or first citizen

// class add = (a,b) => a+b   ///// add is first class


// <----------higher order ----------->

// -> A function that receives another function as an argument,or return a new function known as higher order functions

// ex -> addEventListners( callback ) , setTimeout( callback )

//tranform str to upper first and into one word

// const oneWord = (str) => {
//     return str.replace(/ /g, '').toLowerCase()
// }

// const upperFirstWord = (str) => {
//     const [first, ...otherWords] = str.split(' ')
//     return [first.toUpperCase(), ...otherWords].join(' ');
// }

// // console.log(oneWord("Zilen Modi"));

// // console.log(upperFirstWord("Javascript is best language"));

// const tranformer = (str, fn) => {
//     console.log("Original string: ", str);
//     console.log("New string: ", fn(str));
//     console.log("Function name: ", fn.name);
// }

// tranformer("Zilen Modi", oneWord);
// tranformer("Javascript is best language", upperFirstWord)

//example of return

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// // greet("Hey")("Zilen")

// const greetHey = greet("Hey")
// const greetMorning = greet("Good Morning")

// greetHey("Zilen")
// greetMorning("Om")
// greetMorning("Vatsal")

// <------------------------------------------------>

// <---------------call,apply and bind ------------->

// //Call
// const indiaAir = {
//     airline: 'India Air',
//     iataCode: 'IA',
//     bookings: [],
//     book(flightNum, name) {
//         // console.log(`${name} booked a seat on ${this.airline} ${this.iataCode}${flightNum}`);
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
//     }
// }

// indiaAir.book(239, 'Zilen Modi')
// indiaAir.book(635, "Om hajariwala")

// console.log(indiaAir);


// const inwings = {
//     airline: 'In wings',
//     iataCode: 'IW',
//     bookings: []
// }

// const book = indiaAir.book

// book.call(inwings, 879, "Vatsal Modi")
// book.call(inwings, 980, "Shivam Jariwala")

// console.log(inwings);

// //Apply method same as call but in that pass value in array

// // The apply() method calls the specified function with a given this value, and arguments provided as an array 


// const swiss = {
//     airline: 'Swiss air wings',
//     iataCode: 'IW',
//     bookings: []
// }

// book.apply(swiss, [520, "Sahil Mistry"])
// book.apply(swiss, [980, "Harsh Modhiya"])

// console.log(swiss);

// // The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.



// const emirates = {
//     airline: 'Emirates',
//     iataCode: 'ES',
//     bookings: []
// }

// const bookIW = book.bind(emirates)

// bookIW(789, "Richa Modi")
// bookIW(654, "Nidhi Rawal")

// console.log(emirates);

// //Ex2 of bind : eventListner have own this so we have to pass new function using bind.

// indiaAir.planes = 300
// indiaAir.addNewPlane = function () {
//     this.planes++;
//     console.log(this.planes);
// }

// document.querySelector("#clickedBtn").addEventListener("click", indiaAir.addNewPlane.bind(indiaAir))

// <------------------------------------------------->

// <-------------------IIFE, Closure----------------->

// (function () { console.log("Hello"); })()

//Closure using IIFE

// const counter = ((function () {
//     let privateCounter = 0;
//     function changeBy(value) {
//         privateCounter += value
//     }
//     return {
//         inc() {
//             changeBy(1);
//         },
//         dec() {
//             changeBy(-1)
//         },
//         getValue() {
//             return privateCounter
//         }
//     }
// })())

// counter.dec()
// counter.dec()
// counter.dec()
// counter.dec()

// console.log(counter.getValue())

// // Closure without IIFE

// function counterClosure() {
//     let privateCounter = 0;
//     function changeBy(value) {
//         privateCounter += value
//     }

//     return {
//         inc() {
//             changeBy(1);
//         },
//         dec() {
//             changeBy(-1)
//         },
//         getValue() {
//             return privateCounter
//         }
//     }
// }

// const counter1 = counterClosure()
// counter1.inc()
// counter1.inc()
// counter1.inc()


// console.log(counter1.getValue());

// global scope : we can say that closures have access to all outer function scopes.
// const e = 10;
// function sum(a) {
//     return function sum2(b) {
//         return function sum3(c) {
//             // outer functions scope
//             return function sum4(d) {
//                 // local scope
//                 return a + b + c + d + e;
//             };
//         };
//     };
// }

// const sum2 = sum(1);
// const sum3 = sum2(2);
// const sum4 = sum3(3);
// const result = sum4(4);
// console.log(result); // 20

//Function bundled along with it's lexical scope is closure.

// Advantages of Closure:
// Module Design Pattern
// Currying
// Memoize
// Data hiding and encapsulation
// setTimeouts etc.

// Disadvantages of Closure:
// Over consumption of memory
// Memory Leak
// Freeze browse


// Currying is process of transforming a function which takes multiple attributes into nested form of functions which takes attribute one by one.


// function multiply(x,y){
//     console.log(x*y)
// }
// multiply(5,4);
// //20

// function multiply(x){
//     return function(y){
//         console.log(x*y);
//     }
// }
// const multiplyby3 = multiply(3);
// const multiplyby5 = multiply(5);

// multiplyby3(2);
// //6
// multiplyby5(2);
// //10

// function timer() {
//     for (var i = 1; i < 6; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000)
//     }
// }

// timer()

//solution 1: var to let

// function timer() {
//     for (let i = 1; i < 6; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000)
//     }
// }

// timer()

//solution 2: using closure

// function timer() {
//     for (var i = 1; i < 6; i++) {
//         function close(x) {
//             setTimeout(() => {
//                 console.log(x);
//             }, x * 1000)
//         }
//         close(i)
//     }
// }

// timer()