// The spread operator provides a quick way to convert a NodeList to an array.
const divs = document.querySelectorAll("div");
const divArray = [...divs];
console.log(Array.isArray(divArray)); // true
