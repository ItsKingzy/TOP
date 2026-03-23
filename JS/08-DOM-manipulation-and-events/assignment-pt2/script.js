// Reference to exercise: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting#creating_a_dynamic_shopping_list

const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

// Prevents click default action for button
button.addEventListener("click", clickButton);

function clickButton(event) {
    // Prevent auto form refreshing (inevitably avoiding clearing the list)
    event.preventDefault();
    
    let inputVal = input.value;  // Grab current input after submitting
    input.value = "";  // Reset input

    // Create a new li element
    let li = document.createElement("li");
    let span = document.createElement("span");
    let delButton = document.createElement("button");
    // Append span and button to li
    li.appendChild(span);
    li.appendChild(delButton);

    // Set the text of the span and button to delete
    span.textContent = inputVal;
    delButton.textContent = "Delete";
    ul.appendChild(li);  // append new li to list

    // Delete the list item upon clicking delete
    delButton.addEventListener("click", () => {
        li.remove();
    });

    // Focus to the next list item
    input.focus();
}
