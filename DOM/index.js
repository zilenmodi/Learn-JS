// <---------selectors---------->

// document.getElementById("name-1"); //by id

// document.getElementsByClassName("list-item"); //by class name

// document.getElementsByTagName("ui"); //by tag name

// document.querySelector(".list-items"); all methods

// document.querySelectorAll(".list-item"); // get in array



// <-----------Styling ---------->

// document.querySelector("h1").style.color = "red" // styling



// <--------------- create and add element ----------->

// const li = document.createElement('li') //creating element
// document.querySelector("ui").append(li) // Adding Element

// <------------- text ---------->

// console.log(document.querySelector('li').innerHTML) //Zilen <span>Modi</span>
// console.log(document.querySelector('li').innerText) //Zilen Modi
// console.log(document.querySelector('li').textContent) //Zilen Modi



// <------------ set get attribute ----------------->

// document.getElementById("name-1").setAttribute("class", "first-name list-item")
// console.log(document.getElementById("name-1"));

// console.log(document.getElementById("name-1").getAttribute("id"))


// document.getElementById("name-1").removeAttribute("id")
// console.log(document.querySelector("li"));

// document.querySelector("li").classList.add()
// document.querySelector("li").classList.remove()
// document.querySelector("li").classList.contains()


// console.log(document.documentElement.parentNode); // #document
// console.log(document.documentElement.parentElement); // null

// console.log(document.querySelector("ul").childNodes); //childNodes
// console.log(document.querySelector("ul").nextSibling); //childNodes



// <-----------event listner--------------->

// document.querySelector("li").addEventListener("click", () => {
//     console.log("list 1 clicked");
// })


// <-----------bubbling------------>
// Event propagation is a way of defining the element order when an event occurs.

// In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.

// document.querySelector(".div-container").style.backgroundColor = "lightgreen"
// document.querySelector(".div-box").style.backgroundColor = "lightpink"

// document.querySelector(".div-container").addEventListener("click", () => {
//     console.log("div container clicked");
// })


// document.querySelector(".div-box").addEventListener("click", () => {
//     console.log("div box clicked");
// })

// document.querySelector("button").addEventListener("click", () => {
//     console.log("div button clicked");
// })

/*
div container clicked
div box clicked
div button clicked
*/

// <------------------capturing------------------>
// In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.

// document.querySelector(".div-container").addEventListener("click", () => {
//     console.log("div container clicked");
// }, true)


// document.querySelector(".div-box").addEventListener("click", () => {
//     console.log("div box clicked");
// }, true)

// document.querySelector("button").addEventListener("click", () => {
//     console.log("div button clicked");
// }, true)

/*
div button clicked
div box clicked
div container clicked
*/