function inchToFeet (inputInches){
    const feet = inputInches / 12;
    return feet;
}

const iputInch = 70;
const feetConvert = inchToFeet (iputInch);
const feetFixed = (feetConvert.toFixed(2))
console.log(feetFixed);