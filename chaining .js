// Optional chaining can be used with functions, ensuring the function exists before it’s called.
const user = {
  getName: () => "Alice",
};
console.log(user.getName?.()); // Alice
console.log(user.getAge?.()); // undefined
