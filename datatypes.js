// let zero = 0;
// let one = new Number(1);

// one.test = 5;

// console.log(typeof zero);
// console.log(typeof one);
// console.log(one.test);

// let str = "Hello";

// str.test = "bye"; // (*)

// console.log(str.test);

// let sum1 = 0.1 + 0.2;
// console.log(+sum1.toFixed(2) === +"0.3");

// console.log(Math.ceil(6.35 * 10) / 10);

// let i = 0;
// while (i != 10) {
//   i += 0.2;
//     i += +i.toFixed(0);
//   console.log(+i.toFixed(0));
// }

function hit(a, b) {
  a.type = "zilen";
  b = {
    type: "undefined",
  };
}

var a = {
  type: "ashish",
};

var b = {
  type: "defined",
};

hit(a, b);

console.log(a, b);
