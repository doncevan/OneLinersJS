// Check if an Object is Empty
const isEmpty = (obj) => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
console.log(isEmpty({})); // true
console.log(isEmpty({ a: "not empty" })); //false
