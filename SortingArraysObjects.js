// Easily sort an array of objects by a specific property.
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
];
users.sort((a, b) => a.age - b.age);
console.log(users); // [{ name: 'Bob', age: 20 }, { name: 'Alice', age: 25 }]
