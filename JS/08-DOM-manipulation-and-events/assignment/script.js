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
