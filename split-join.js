const lyrics = "I love a girl. Whose name is Tanha Chowdhury. Her family is conservative family.";
// this is for to split by space 
const parts = lyrics.split(" ");
console.log(parts);
// this is for to split by dot (.)
const sentenceSplit = lyrics.split(".");
console.log(sentenceSplit)

// slice
const slycing = lyrics.slice(2,6);
console.log(slycing)
// ---------------------------------------------------------
// gap assesment
const num1 = 35;
const num2 = 45;

const gap = Math.abs(num1 - num2);
console.log(gap);

// to determine full number from part number 
let thisNumber = 2.9757575;
let fullNumber = Math.round(thisNumber)
console.log(fullNumber);