// ----------Assignment 4------------

//problem 1

// at first the function has a default msg for input without number
// the input number is product with 3 and added 10. the result is divide by 2 and at last substructed 2 from them.

function mindGame(inputNumber) {
  if (typeof inputNumber === "number") {
    const firstSolving = inputNumber * 3 + 10;
    const secondSolving = firstSolving / 2 - 5;
    return secondSolving;
  } else {
    return "Error: parameter must be a number";
  }
}
let result = mindGame(50);
console.log(result);

//problem 2

// the function has a default msg. the function parameter will take a string as parameter and return even or odd depends on the string characters number

function evenOdd(string) {
  if (typeof string !== "string") {
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

// the function has a default msg if input number is not number. at first it will check the difference between parameter and 7 by substruction. then it will return substruction result if it becomes less than 7 otherwise it return double of difference

function isLGSeven(inputNumber) {
  if (typeof inputNumber !== "number") {
    return "Input must be a number.";
  }
  let difference = inputNumber - 7;
  if (difference < 7) {
    return difference;
  } else {
    return number * 2;
  }
}
const inputResult = isLGSeven(13);
console.log(inputResult);

//problem 4

// the function has two default for only number input parameter.
// the function will return all negative numbers from input array

function findingBadData(data) {
  if (!Array.isArray(data)) {
    return "Error: Please provide an array of numbers";
  }

  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] !== "number") {
      return "Error: Array elements should be numbers only";
    }
    if (data[i] < 0) {
      count++;
    }
  }
  return count;
}

const arr = [6, 9, -5, -8];
const returnNumber = findingBadData(arr);
console.log(returnNumber);

//problem 5

// the function has a default msg for only number input parameter.
// there has three parameters. the parameters multiflied by 3 types of number.
// after multiflication total number is checked for 2000*2. if the number is equal or under 2000 it returns the substruction amount otherwise it returns total amount

function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
  if (typeof firstFriendGems !== 'number' || typeof secondFriendGems !== 'number' || typeof thirdFriendGems !== 'number') {
    return "Please provide numbers as parameters.";
  }

  const firstFriendTotal = firstFriendGems * 21;
  const secondFriendTotal = secondFriendGems * 32;
  const thirdFriendTotal = thirdFriendGems * 43;
  const totalDiamonds = firstFriendTotal + secondFriendTotal + thirdFriendTotal;
  const diamondsProduct = 1000 * 2;
  if (totalDiamonds > diamondsProduct) {
    const diamonds = totalDiamonds - diamondsProduct;
    return diamonds;
  } else {
    return totalDiamonds;
  }
}
const inputGems = gemsToDiamond(20, 200, 50);
console.log(inputGems);
