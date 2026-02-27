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