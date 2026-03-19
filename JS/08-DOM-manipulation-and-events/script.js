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
const container2 = document.querySelector("#container2");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container2.appendChild(content);




// EXERCISE
// Add a <p> with red text that says “Hey I’m red!”
const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red!"
container2.appendChild(p);

// Add an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!"
h3.style["color"] = "blue";
container2.appendChild(h3);

// Add a <div> with a black border and pink background color with the following elements inside of it:
    // another <h1> that says “I’m in a div”
    // a <p> that says “ME TOO!”
    // Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
const div2 = document.createElement("div");
div2.setAttribute("style", "padding: 10px; border: solid; border-color: black; background-color: pink;")
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
h1.setAttribute("style", "color: green;")
const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
div2.appendChild(h1);
div2.appendChild(p2);
container2.appendChild(div2);