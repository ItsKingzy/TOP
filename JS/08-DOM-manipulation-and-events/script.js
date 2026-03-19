// EXAMPLE
// selects the #container div (don't worry about the syntax, we'll get there)
const container = document.querySelector("#container");

// selects the first child of #container => .display
const display = container.firstElementChild;
console.log(display);  // <div class="display"></div>


// EXAMPLE
// selects the .controls div
const controls = document.querySelector(".controls");

// selects the prior sibling => .display
const display2 = controls.previousElementSibling;
console.log(display2); // <div class="display"></div>
