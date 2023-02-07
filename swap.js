let first = 5;
let second = 7;
const temp = first;
first = second;
second = temp;
console.log(first, second)

// this is destructuring of swap

[ first, second ] = [ second, first ];
console.log(first, second);