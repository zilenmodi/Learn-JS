// let a = 10;
// var b = 20;

// function solve() {
//   console.log(a); // undefined, b is TDZ
//   var a = 30;
//   let b = 40;
//   console.log(a, b); //30,40
// }

// solve(a, b);
// console.log(a, b); //10,20

/*

//Rule of Block and global scope
1. If let and var is globally declare and in {} block scope, we are changing values, then it affects globally.
2. If let and const is globally declare and in {} block scope, we are declaring values, then it not affects globally.
3. If var is globally declare and in {} block scope, we are declaring values, then it affects globally.
4. let globally and var in block, then it is illegal shadowing.
5. var globally and var || let in block, then it is legal shadowing.


//Rule of Functions and global scope
1. If variable not declare and not passed, So scope chain will apply.
2. If variable not declare and not passed, but assigned into parameter, then it will create it own memory in global (undefined).
3. If variable not declare and passed, then it will create it own memory in global (variables value).
4. If variable are declare and passed, with let, gives "already been declared", with var, gives hoisting.
5. If not passed, works normally as execution context.


*/

// let obj1 = {
//   name: "Zilen",
//   age: 23,
//   size: {
//     width: "50",
//     height: "180",
//     more: {
//       length: "40",
//     },
//   },
// };

// let obj2 = Object.create(obj1);

// obj2.age = 100;

// console.log(obj1);
// var x = { value: 10 };
// function outer() {
//   console.log(x.value);
//   function inner() {
//     console.log(x.value);
//   }
//   inner();
//   var x = { value: 20 };
// }
// outer();

// let Airline = function (name, code) {
//   this.name = name;
//   this.code = code;
// };

// Airline.prototype.bookTicket = function (tickets) {
//   console.log(`${this.code}: Booked ${tickets} tickets`);
// };

// let IndianAirline = function (name, code, seat) {
//   Airline.call(this, name, code);
//   this.seat = seat;
// };

// IndianAirline.prototype.__proto__ = Airline.prototype;

// let indigo = new IndianAirline("Ingido Air", "IA103", 300);

// indigo.bookTicket(2);

// class Airline {
//   constructor(name, code) {
//     this.name = name;
//     this.code = code;
//   }
//   bookTicket(tickets) {
//     console.log(`${this.code}: Booked ${tickets} tickets`);
//   }
// }

// class IndianAirline extends Airline {
//   constructor(name, code, seat) {
//     super(name, code);
//     this.seat = seat;
//   }
// }

// let indigo = new IndianAirline("Ingido Air", "IA103", 300);

// indigo.bookTicket(2);
