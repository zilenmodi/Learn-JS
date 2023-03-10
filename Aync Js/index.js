// <----------------------- callback ------------------>

// let order = (callProduction) => {
//     console.log("Order placed, please call production");
//     callProduction();
// }

// let production = () => {
//     console.log("Order recevied, starting production");
// }

// order(production)

// <-------------------Async JS ------------------------>

// console.log("start");

// setTimeout(() => {
//     console.log("CallBack after 5 Sec!");
// }, 2000)

// console.log("End");

// setTimeout() , console.log() , fetch() , addEventListner() all are part of web apis, so it can be call using window. 

/*

Whenever we call setTimeout, it's register callback function and timer starts.Then, When timer end, So call back push into callback queue or task queue.

"Event loop" is used to push function into call stack from callback queue.

it continuesly check callback is empty or not, then push functions from callback queue.

for, fetch and promises, it is used micro queue and it has more priority then callback queue.

if micro queue is recursive then, known as starvation.

Issues with setTimeout()

if code takes 10 sec but setTimeout has 5 sec timer, then it have to wait.

"Don't block main thread!!!"

*/

// <------------- Call Back Hell ---------------->

// let stocks = {
//     Fruits: ["strawberry", "grapes", "banana", "apple"],
//     liquid: ["water", "ice"],
//     holder: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"],
// };

// let order = (fruitName, production) => {
//     setTimeout(() => {
//         console.log(`${stocks.Fruits[fruitName]} was selected`);
//         production();
//     }, 2000)

// }

// let production = () => {
//     setTimeout(() => {
//         console.log("production has started")
//         setTimeout(() => {
//             console.log("The fruit has been chopped")
//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
//                 setTimeout(() => {
//                     console.log("start the machine")
//                     setTimeout(() => {
//                         console.log(`Ice cream placed on ${stocks.holder[1]}`)
//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} as toppings`)
//                             setTimeout(() => {
//                                 console.log("serve Ice cream")
//                             }, 2000)
//                         }, 3000)
//                     }, 2000)
//                 }, 1000)
//             }, 1000)
//         }, 2000)
//     }, 0000)
// }

// order(0, production)

/*

Problem with callback is callback hell:
1. Pyramid of Doom : hell structure of callback
2. Inversion of control : function calling depend on another function.

Above example:

1. Place order take 2 Sec.
2. Cut The Fruit take 2 Sec.
3. Add Water and ice take 1 Sec.
4. Start the machine take 1 Sec.
5. Select container take 2 Sec.
6. Select Toppings take 3 Sec.
7. Serve ice Cream take 1 Sec.

Solution -----> Promises

Pending: This is the initial stage. Nothing happens here. Think of it like this, your customer is taking their time giving you an order. But they haven't ordered anything yet.

Resolved: This means that your customer has received their food and is happy.

Rejected: This means that your customer didn't receive their order and left the restaurant.

*/

// let is_shop_open = false

// let stocks = {
//     Fruits: ["strawberry", "grapes", "banana", "apple"],
//     liquid: ["water", "ice"],
//     holder: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"],
// };

// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {
//             setTimeout(() => {
//                 //Work is getting done.
//                 resolve(work())
//             }, time)
//         }
//         else {
//             reject(console.log("Our shop is closed"))
//         }
//     })
// }


// // step 1
// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

//     // step 2
//     .then(() => {
//         return order(0000, () => console.log('production has started'))
//     })

//     // step 3
//     .then(() => {
//         return order(2000, () => console.log("Fruit has been chopped"))
//     })

//     // step 4
//     .then(() => {
//         return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
//     })

//     // step 5
//     .then(() => {
//         return order(1000, () => console.log("start the machine"))
//     })

//     // step 6
//     .then(() => {
//         return order(2000, () => console.log(`ice cream placed on ${stocks.holder[1]}`))
//     })

//     // step 7
//     .then(() => {
//         return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
//     })

//     // Step 8
//     .then(() => {
//         return order(2000, () => console.log("Serve Ice Cream"))
//     })

//     .catch(() => {
//         console.log("Customer left")
//     })

//     .finally(() => {
//         console.log("end of day")
//     })


// <---------------- Aync / Await ------------------->

/*

When we have to wait for some operation and then continue performing another lines of code, We can also use aync await function.

take example of kitchen: where chef is making sojme receipe and he have to ask some choice of topping to customer then, he have to wait for some time. but other works are continue like cleaning or taking orders.

*/

// function toppingChoice() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log("Which topping would you love?"))
//         }, 3000)
//     })
// }

// async function kitchen() {
//     //task of chef which he is doing
//     console.log("Start preparing");

//     //go outside of kichen and ask to customer
//     await toppingChoice();

//     //again start working
//     console.log("order is ready");
// }

// function cleaner() {
//     console.log("Cleaning the store");
//     console.log("Cleaning the tables");
// }

// async function waiter() {
//     console.log("taking orders");
//     console.log("telling to chef for preparing");

//     await kitchen();

//     console.log("Serving orders");
// }

// waiter();
// cleaner(); //cleaner is not waiting because it's work parellaly

/*

Output:

taking orders
telling to chef for preparing
Start preparing
Cleaning the store
Cleaning the tables
Which topping would you love?
order is ready
Serving orders

*/

// let is_shop_open = true;

// let stocks = {
//     Fruits: ["strawberry", "grapes", "banana", "apple"],
//     liquid: ["water", "ice"],
//     holder: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"],
// };

// function time(ms) {
//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {
//             setTimeout(resolve, ms);
//         }
//         else {
//             reject(console.log("Shop is closed"))
//         }
//     });
// }
// async function kitchen() {
//     try {
//         await time(2000)
//         console.log(`${stocks.Fruits[0]} was selected`)

//         await time(0000)
//         console.log("production has started")

//         await time(2000)
//         console.log("fruit has been chopped")

//         await time(1000)
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

//         await time(1000)
//         console.log("start the machine")

//         await time(2000)
//         console.log(`ice cream placed on ${stocks.holder[1]}`)

//         await time(3000)
//         console.log(`${stocks.toppings[0]} as toppings`)

//         await time(2000)
//         console.log("Serve Ice Cream")
//     }

//     catch (error) {
//         console.log("customer left")
//     }

//     finally {
//         console.log("end of day")
//     }
// }

// // Trigger
// kitchen();