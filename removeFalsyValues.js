// Use filter() to remove falsy values (like 0, null, undefined, false) from an array.
const arr = [0, "hello", null, 42, false, "world"];
const filtered = arr.filter(Boolean);
console.log(filtered); // ["hello", 42, "world"]
