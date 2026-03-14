// Link to website with exercises: https://javascript.info/array-methods#tasks

// Translate border-left-width to borderLeftWidth
function camelize(str) {
    return str
        // Converts str into an array
        .split("-")
        // Removes trailing spaces for all items
        .map(item => item.trim())
        // Map each item to a Title form
        .map((word, index) => index == 0 ? word : word.at(0).toUpperCase() + word.substring(1,))
        // Join the strings together
        .join("")

    /* OLD SOLUTION:
    // Turns the string into an array
    let strSplice = str.split("-");

    // Map each item to a trimmed from of itself (i.e., removing trailing spaces)
    strSplice = strSplice.map(item => item.trim());

    // Filters the array by removing blank items
    strSplice = strSplice.filter((item) => item !== "");

    // Map each item to a Title form
    strSplice = strSplice.map(
        (str) => str.at(0).toUpperCase() + str.substring(1,)
    );

    return strSplice.join("");
    */
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize(" - webkit-transition-  f"));  // Edgecase