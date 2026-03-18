// Q1: https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners

function printEven(n) {
    for (let i = 0; i <= n; i++) {
        console.log(i);
    }
}

printEven(10);




// Q2: https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners
function multiplicationTable(n) {
    for (let i = 1; i <= n; i++) {
        let output = "";
        for (let j = 1; j <= n; j++) {
            output += j*i + " ";
        }
        console.log(output);
    }
}

multiplicationTable(10);