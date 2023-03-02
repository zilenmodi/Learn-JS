// - It’s a data structure which records the function calls, basically where in the program we are.
// - If we call a function to execute , we push something on to the stack, and when we return from a function, we pop off the top of the stack.
// - When a JS program is ran, a global execution context is created.
// - The execution context is created in two phases.
//     - Memory creation phase - JS will allocate memory to variables and functions.
//     - Code execution phase

function foo() {
    console.log("Oops!");
}

function bar() {
    foo()
}

function baz() {
    bar();
}

baz()