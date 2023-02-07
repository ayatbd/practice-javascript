// ----------Assignment 4------------
// Problem 1: Let’s play a mind game____
//problem 1
function mindGame (inputNumber){
  if (typeof inputNumber === 'number') {
    const firstSolving = inputNumber * 3 + 10;
    const secondSolving = firstSolving/2-5;
    return secondSolving;
  } else {
    return 'Error: parameter must be a number';
  }
}
let result = mindGame (50);
console.log(result);

//problem 2
function evenOdd(string) {
  if (typeof string !== 'string') {
    return "Input must be a string";
  } else if (string.length % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
const evenOddNumber = evenOdd("phero");
console.log(evenOddNumber);

//problem 3
function isLGSeven(inputNumber) {
    if (typeof inputNumber !== 'number') {
        return "Input must be a number.";
    }
    let difference = (inputNumber - 7);
    if (difference < 7) {
        return difference;
    } else {
        return number * 2;
    }
}
const inputResult = isLGSeven(13);
console.log(inputResult);

//problem 4

function findingBadData(data) {
  if (!Array.isArray(data)) {
    return "Error: Please provide an array of numbers";
  }

  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] !== 'number') {
      return "Error: Array elements should be numbers only";
    }
    if (data[i] < 0) {
      count++;
    }
  }
  return count;
}

const arr =[6, 9, -5, -8];
const returnNumber = findingBadData(arr);
console.log(returnNumber);

//problem 5
function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems){
  const firstFriendTotal = firstFriendGems*21;
  const secondFriendTotal = secondFriendGems*32;
  const thirdFriendTotal = thirdFriendGems*43;
  const totalDiamonds = firstFriendTotal + secondFriendTotal + thirdFriendTotal;
  const diamondsProduct = 1000*2;
  if(totalDiamonds>diamondsProduct){
    const diamonds = totalDiamonds-diamondsProduct;
    return diamonds;
  } else{
      return totalDiamonds;
  }

}
const inputGems = gemsToDiamond(20, 200, 50);
console.log(inputGems);