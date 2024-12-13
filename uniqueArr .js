// The uniqueArr function converts the data to a Set and then destructures it back into an array.
const uniqueArr = (arr) => [...new Set(arr)];

console.log(uniqueArr(["frontend", "js", "html", "js", "css", "html"]));
// ['frontend', 'js', 'html', 'css']
