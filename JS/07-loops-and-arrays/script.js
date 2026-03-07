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
        myFavoriteCats += `and ${cats[i]}.`;
    } else {
        myFavoriteCats += `${cats[i]}, `;
    }

    i++;
}
console.log(myFavoriteCats);