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



// Many returns in a single function
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}



// If a function does not return a value, it is the same as if it returns undefined:
function doNothing() { /* empty */ }
alert( doNothing() === undefined ); // true

function doNothing() {
  return;
}
alert( doNothing() === undefined ); // true



// Exercise:
function min(a, b) {
    return (a < b) ? a : b;
}

console.log(min(2, 5) == 2);  // true
console.log(min(3, -1) == -1);  // true
console.log(min(1, 1) == 1);  // true
