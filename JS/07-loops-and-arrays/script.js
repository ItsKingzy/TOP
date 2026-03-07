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


