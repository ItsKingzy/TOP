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
// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Do you have permission from your parents?');
//   }
// }

// let age = prompt('How old are you?', 18);

// if ( checkAge(age) ) {
//   alert( 'Access granted' );
// } else {
//   alert( 'Access denied' );
// }



// If a function does not return a value, it is the same as if it returns undefined:
function doNothing() { /* empty */ }
console.log( doNothing() === undefined ); // true

function doNothing() {
  return;
}
console.log( doNothing() === undefined ); // true



// Exercise min function:
function min(a, b) {
    return (a < b) ? a : b;
}

console.log(min(2, 5) == 2);  // true
console.log(min(3, -1) == -1);  // true
console.log(min(1, 1) == 1);  // true



// Exercise pow function
function pow(x, n) {
    if (n == 1) {
        return x
    } else {
        return x * pow(x, n-1);
    }
}

console.log(pow(3, 2));  // = 3 * 3 = 9
console.log(pow(3, 3));  // = 3 * 3 * 3 = 27
console.log(pow(1, 100));  // = 1 * 1 * ...* 1 = 1


// Anonymous function definition
(function () {
  console.log("Hello World");
});

// Anonymous function example
// textBox.addEventListener("keydown", function (event) {
//   console.log(`You pressed "${event.key}".`);
// });
/* 
^ In the example above, you are calling the 
addEventListener on the textBox variable, but 
you pass an anonymous function as the second 
argument in the .addEventListener method which 
doesnt have a name but is rather just executed 
as an argumen all together
*/

// Arrow functions
/* 
If you pass an anonymous function like this,
there's an alternative form you can use, called 
an arrow function. Instead of function(event), 
you write (event) =>:
*/
// textBox.addEventListener("keydown", (event) => {
//   console.log(`You pressed "${event.key}".`);
// });
/*
** if the function only takes on paramaeter you can drop the parentheses:

textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});

*/







