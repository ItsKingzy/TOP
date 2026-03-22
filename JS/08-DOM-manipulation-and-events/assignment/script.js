// Doing some basic DOM manipulation
const link = document.querySelector("#a2");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

// Creating and placing new nodes
const sect = document.querySelector("section");  // sect is a node
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride."
sect.appendChild(para);
const text = document.createTextNode(" - the premier source for web development knowledge.");
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// Moving and removing elements
sect.appendChild(linkPara); // Moves the linkPara node to the bottom of the section, this 
                            // does NOT make a second copy of the node. 
                            // (moves the "We hope you enjoyed the ride" to the top)
sect.removeChild(linkPara); // Removes the linkPara from the DOM
linkPara.remove();          // This works the exact same 
                                // (Only differnce is that it refers itself)
linkPara.parentNode.removeChild(linkPara); // .remove() is not supported in older browsers, 
                                           // so this is the work around for that

// Manipulating Styles

