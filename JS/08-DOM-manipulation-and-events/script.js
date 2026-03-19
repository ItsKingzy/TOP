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



// EXAMPLE - element creation
const div = document.createElement("div");
// sets the indicated style rule to the element in the div variable
div.style.color = "blue";

// set the entire inline style
div.setAttribute("style", "color: blue; background: white;");
// Cannot use kebab case, must use camel case
div.style.backgroundColor = "white";
// bracket notation with kebab-case: also works
div.style["background-color"];

// bracket notation with camelCase: also works
div.style["backgroundColor"];



// FULL EXAMPLE
const container1 = document.querySelector("#container2");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container1.appendChild(content);
