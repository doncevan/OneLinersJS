// Assign default values during destructuring to avoid undefined when keys are missing.
const user = { name: "Alice" };
const { name, age = 25 } = user;
console.log(age); // 25
