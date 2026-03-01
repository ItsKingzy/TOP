// Write a function called add7 that takes one number and returns that number + 7.
    // add7(10) should return 17
function add7(num) {
    return num + 7;
}

console.log(add7(10));




// Write a function called multiply that takes 2 numbers and returns their product.
    // multiply(3, 2) should return 6
let multiply = (num1, num2) => num1 * num2;
console.log(multiply(3, 2));




// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
    // capitalize("abcd") should return "Abcd"
    // capitalize("ABCD") should return "Abcd"
    // capitalize("aBcD") should return "Abcd"
function capitalize(string) {
    let strLower = string.toLowerCase();
    let strCapitalized = strLower.charAt(0).toUpperCase() + strLower.slice(1,);

    return strCapitalized
}
console.log(capitalize("abcd"));  // Abcd
console.log(capitalize("ABCD"));  // Abcd
console.log(capitalize("aBcD"));  // Abcd




// Write a function called lastLetter that takes a string and returns the very last letter of that string:
function lastLetter(string) {
    return string.at(-1);
    // N.B.: Cannot use charAt(...) with a negative index val, therefore use .at(...) method.
}
console.log(lastLetter("abcd"));  // d