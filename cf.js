// let animal = {
//   jumps: null,
// };

// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// console.log(rabbit.jumps); // ? (1) true

// delete rabbit.jumps;

// console.log(rabbit.jumps); // ? (2) null

// delete animal.jumps;

// console.log(rabbit.jumps); // ? (3) undefined

let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

// user.sayHi();

// setTimeout(user.sayHi, 2000);

let sayHi = user.sayHi.bind(user);

setTimeout(() => {
  sayHi();
}, 2000);

user.firstName = "Zilen";
