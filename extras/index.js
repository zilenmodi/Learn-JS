/*

Normal way to load -> html -> script download -> script execute -> html

Aync -> html and script download (parellal) -> script execute -> html

defer -> html and script download (parallel) -> html -> script

defer is good option to load

<script>console.log("Running HTML")</script> //normal;
<script defer src="./small.js"></script> //defer
<script async src="./large.js"></script> //aync

*/


// let count = 0;
// function handleChangeInput() {
//     console.log("Count: ", count++);
// }

// function debounce(call_handleChangeInput, ms) {
//     let timer;
//     return () => {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             call_handleChangeInput()
//         }, ms)
//     }
// }

// const processChange = debounce(handleChangeInput, 1000)


// let count = 0;
// function handleClickedBtn() {
//     // console.log("Clicked");
//     document.querySelector("button").disabled = false
// }

// function throt(call_handleClickedBtn, ms) {
//     return () => {
//         document.querySelector("button").disabled = true
//         setTimeout(() => {
//             call_handleClickedBtn()
//         }, ms)
//     }
// }

// const processClicked = throt(handleClickedBtn, 1000)


/*

Throttling: will delay executing a function. It will reduce the notifications of an event that fires multiple times.

Debouncing: will bunch a series of sequential calls to a function into a single call to that function. It ensures that one notification is made for an event that fires multiple times.

*/



// <----------------Generator Function-------------->

// function* solve() {
//     let i = 100;
//     while (true) {
//         i++;
//         yield i
//     }
// }


// let simpleIdGenerator = solve();

// function getNewId() {
//     document.getElementById("newId").innerText = simpleIdGenerator.next().value
// }