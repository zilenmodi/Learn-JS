let user1 = new Object(); //constructor
let user2 = {}; //object liteals

user1 = {
  name: "John",
  age: 30,
  49: "Germany",
  1: "India",
};

user1.address = "America";

user1["School Address"] = "Gerogia";

delete user1.address;

delete user1["School Address"];

// console.log(user1);

// console.log("age" in user1);

for (key in user1) {
  // console.log(user1[key]);
}

// -------------------------------------------------------------

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumeric = (menu) => {
  for (let x in menu) {
    menu[x] = typeof menu[x] === "number" ? menu[x] * 2 : menu[x];
  }
  return menu;
};

menu = multiplyNumeric(menu);
// console.log(menu);

// Coping an Object
/*

1. spread op
2. assign
3. structuredClone
4. JSON
5. Shallow

*/

// -------------------------------------------------------------
// Object.assign

const user3 = {
  name: "John Wick",
  age: 40,
  sizes: {
    height: 182,
    width: 50,
  },
};

const user4 = Object.assign({}, user1, user3);

// user4.name = "Zilen Modi";
// user4.sizes.height = 174;

// console.log(user4, "user4");
// console.log(user3, "user3");

// -------------------------------------------------------------
// structuredClone(...)

const user5 = structuredClone(user3);

// user5.name = "Zilen Modi";
// user5.sizes.height = 174;

// console.log(user5, "user4");
// console.log(user3, "user3");

// -------------------------------------------------------------
// JSON

let user6 = JSON.parse(JSON.stringify(user3));

// user6.name = "Zilen P Modi";
// user6.sizes.height = 174;

// console.log(user6, "user4");
// console.log(user3, "user3");

// user6.sayHi = function () {
//   console.log(`hello, ${this.name}`);
// };

// user6.sayHi();

// let user7 = {
//   name: "John Wick",
//   sayHello: function () {
//     console.log(`hello, ${this.name}`);
//   },
// };

// user7.sayHello();

// let user7 = {
//   name: "John Wick",
//   sayHello: function () {
//     let arrow = () => console.log(`hello, ${this.name}`);
//     arrow();
//   },
// };

// user7.sayHello();

// function makeUser() {
//   let name = "Zilen";
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user = makeUser();

// console.log(user.ref.name); //undefined bcz calls matters

// function makeUser() {
//   let name = "Zilen";
//   return {
//     name: "john",
//     ref: function () {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// console.log(user.ref().name); //undefined bcz calls matters

// -------------------------------------------------------------
// Constructor Function

// function User(name, age) {
//   // this = {};  (implicitly)

//   this.name = name;
//   this.age = age;

//   this.sayhi = () => {
//     console.log("hello", this.name);
//   };
//   // return this;  (implicitly)
// }

// const user8 = new User("Zilen", 21);
// user8.sayhi();

let obj1 = {
  name: "Apple",
  print() {
    console.log(this.name);
  },
};

const print = obj1.print.bind(obj1);
print();
