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
    return string.toUpper();
}
const upperCats = cats.map(toUpper);
console.log(upperCats);  // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]