// let arr1 = new Array();
// let arr2 = [];

// let fruits = ["Apple", "Banana", "Mango"];

// fruits[1] = "Plum";

// fruits.push("Orange");

// fruits.unshift("Banana");

// fruits.age = 25; // create a property with an arbitrary name

// console.log(fruits);

// ---------------------------------------------------------------

let arr3 = ["zilen", "vivek", "abhishek", "ritesh"];

arr3.splice(-1, 0, "honey", "vanshita");

// console.log(arr3);

arr3 = arr3.slice(2, -1);

// console.log(arr3);

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2,
};

let arr4 = Array.from(arrayLike, (val) => val + "  ok!"); // (*)
console.log(arr4);
