//Adding text
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added With Javascript!";
document.body.appendChild(newParagraph)
//Adding an image by defining each part of a string
const newImage = document.createElement("img");
newImage.setAttribute("src","https://picsum.photos/200")
newImage.setAttribute("alt","Random image from picsum")
document.body.appendChild(newImage);
//adding a list with a complete string
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);
//Personal attempt to add text with js
const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through JavaScript</p>";
document.body.appendChild(newSection);

