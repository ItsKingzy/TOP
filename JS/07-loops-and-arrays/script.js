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


// length PROPERTY
console.log(fruits.length);  // Returns length of list (currently return 4)


// Arrays can store everything
let arr3 = ["Apple", {name: "John"}, true, function() {console.log("Hello");}]
// Get the object at index 1 and show their name
console.log(arr3[1].name);  // John
// Get the function at the index 3 and run it
console.log(arr3[3]());  // Hello


// We cannot access the last item in an array using -1 index, that doesn't work in JS, we must calculate it using [arr.length - 1]
console.log(fruits[fruits.length-1]);  // Banana
// We can also use .at() method and use the exact index you want
  // [arr.length - 1] == .at(-1)
console.log(fruits.at(-1));  // Banana

// .pop() Method
let fruits2 = ["Apple", "Orange", "Pear"];
console.log(fruits2.pop());  // Remove "Pear" from fruits2 and print it
console.log(fruits2);  // ["Apple", "Orange"]

// .push() method
fruits2 = ["Apple", "Orange"];
fruits2.push("Pear");
console.log(fruits2);  // ["Apple", "Orange", "Pear"]
// The call fruits2.push(...) is equal to fruits2[fruits.length] = ...

// .shift() method
fruits2 = ["Apple", "Orange", "Pear"];
console.log(fruits2.shift());  // Remove Apple and print it
console.log(fruits2);  // ["Orange", "Pear"]

// .unshift() method
fruits2 = ["Orange", "Pear"];
fruits2.unshift("Apple");
console.log(fruits2);  // ["Apple", "Orange", "Pear"]

// Push and unshift can take multiple arguments at once
fruits2 = ["Apple"];
fruits2.push("Orange", "Peach");  // ["Apple", "Orange", "Peach"]
fruits2.unshift("Pineapple", "Lemon"); // ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log(fruits2);  // ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]

// Copy by reference
fruits2 = ["Banana"];
let arr5 = fruits2; // copy by reference (two variables reference the same array)
console.log( arr5 === fruits2 ); // true
arr5.push("Pear"); // modify the array by reference
console.log( fruits2 ); // Banana, Pear - 2 items now

// Matrix
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[0][1]); // 2, the second value of the first inner array

// after [] was converted to '' (object (array) converted to a primitive (string), thus true)
console.log( 0 == '' ); // true, as '' becomes converted to number 0
console.log('0' == '' ); // false, no type conversion, different strings




// Array exercise 1
/*
Let’s try 5 array operations.

1. Create an array styles with items “Jazz” and “Blues”.
2. Append “Rock-n-Roll” to the end.
3. Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
4. Strip off the first value of the array and show it.
5. Prepend Rap and Reggae to the array.
*/
// Step 1
let styles = ["Jazz", "Blues"];
console.log(styles);
// Step 2
styles.push("Rock-n-Roll");
console.log(styles);
// Step 3
styles[1] = "Classics";
console.log(styles);
// Step 4
styles.shift();
console.log(styles);
// Step 5
styles.unshift("Rap", "Reggae");
console.log(styles);


// Array exercise 2
/*
The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.

For instance:
getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)
*/

/*
Idea: 
- loop add all positive numbers and store in a var.
- in the loop, store the max number if arr[i] > sum of all posivie nums
- skip all negative, if max = 0, and sumPositive = 0, return 0
*/
function getMaxSubSum(arr) {
  lenArr = arr.length;
  max = Math.max(arr);  // Max num in array
  sumPositive = 0;  // Sum of all positive numbers in array

}