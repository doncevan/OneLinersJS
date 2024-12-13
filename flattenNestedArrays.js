// Flattening multi-level nested arrays becomes straightforward with Array.flat(Infinity).
const nested = [1, [2, [3, [4]]]];
console.log(nested.flat(Infinity)); // [1, 2, 3, 4]
