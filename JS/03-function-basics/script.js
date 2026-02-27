/*
- function parameter: animal
- function argument: "Goat"
*/

function favoriteAnimal(animal) {
    return animal + " is my favorite animal!";
}

const message = favoriteAnimal("Goat");  // function argument: "Goat"
console.log(message);
console.log(favoriteAnimal("Goat"));


// Example of default value
function showMessage(from, text = "no text given") {
  console.log( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given


// Example using "nullish coalescing operator"
function showCount(count) {
  // if count is undefined or null, show "unknown"
  console.log(count ?? "unknown");
  // ?? is equivilant to result = (a !== null && a !== undefined) ? a : b;
    // nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when the left-hand side operand is null or undefined
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown