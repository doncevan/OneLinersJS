// Use Array.from() to convert array-like objects (e.g., arguments) into real arrays.
function example() {
  const argsArray = Array.from(arguments);
  console.log(argsArray);
}
example(1, 2, 3, "four"); // [1, 2, 3
