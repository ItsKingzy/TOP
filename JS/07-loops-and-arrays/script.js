// Example 1: Using for .. of
/*
for (const cat in cats) {console.log(cat);} prints the index (notice keyword "in")
*/
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);  // Prints the value within the cats array
}


// Exmaple 2: Using map
/*
1. Create a function toUpper which returns the upper of a sting
2. Create const var upperCats that takes cats array and maps all those stings to upper
3. Print output
*/
function toUpper(string) {
    return string.toUpperCase();
}
const upperCats = cats.map(toUpper);
console.log(upperCats);  // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]


// Example 3: filter() method
/*
- filter takes in a function lCat and returns string for which the first letter starts will 'L'
*/
function lCat(cat) {
  return cat.startsWith("L");
}
const filtered = cats.filter(lCat);
console.log(filtered);  // [ "Leopard", "Lion" ]


// Exmaple 4: using filter with an arrow function
const filtered2 = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered2);  // [ "Leopard", "Lion" ] (same output as before)


// Example 5: example 1 but with normal loop
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

// Example 6: looping through an array
const myCats = ["Nova", "Summer", "Yuki"];
let myFavortieCats = "My cats are called ";
for (let i = 0; i < myCats.length; i++) {
    if (i === myCats.length - 1) {
       // We are at the end of the array
        myFavortieCats +=  `and ${myCats[i]}.`;
    } else {
        myFavortieCats += `${myCats[i]}, `;
    }
}
console.log(myFavortieCats);


// Example 7: while loop
let i = 0;
myFavoriteCats = "My cats are called ";
while (i < myCats.length) {
    if (i === myCats.length - 1) {
        myFavoriteCats += `and ${myCats[i]}.`;
    } else {
        myFavoriteCats += `${myCats[i]}, `;
    }

    i++;
}
console.log(myFavoriteCats);


// Example 8: do while loop
myFavoriteCats = "My cats are called ";

i = 0;

do {
  if (i === myCats.length - 1) {
    myFavoriteCats += `and ${myCats[i]}.`;
  } else {
    myFavoriteCats += `${myCats[i]}, `;
  }

  i++;
} while (i < myCats.length);

console.log(myFavoriteCats);


// Example 9: break labels
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
    if (!input) break outerLoop;
  }
}
alert("Done!");


// Practice exercise 1:
let j = 0;
while(j != 3) {
  console.log(`number ${j}`);
  j++;
}


// Practice exercise 2:
/*
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
*/
do {
  num = prompt("Enter a number higher than 100");
} while (num <= 100);


// Practice exercise 3:
/*
Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value.
*/
function prime(n) {
  nextPrime: 
  for (i = 1; i <= n; i++) {
    for (j = 2; j < i; j++) {
      if (i%j === 0) {
        continue nextPrime;
      }
    }
    console.log(i);
  }
}
prime(5);




// Arrays (two way of dedclaring an empty array)
let arr1 = new Array();
let arr2 = [];

let fruits = ["Apple", "Orange", "Plum"];
fruits[4] = "Banana";  // Adding an element to the 5th position (4th position will be empty)
console.log(fruits);