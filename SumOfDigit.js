// for(i=0; i<=9; i++){
//     console.log(i)
// }
/// ----------------------------------//
let sum = 0;
for (i = 1; i <= 9; i++) {
  sum = sum + i;
  console.log(i, sum);
}

function sumOfAnArray(numbers) {
  let sum = 0;
  for (i = 1; i <= numbers; i++) {
    sum = sum + i;
    console.log(i, sum);
  }
  return sum;
}
let getSum = sumOfAnArray(10);
console.log(getSum);

