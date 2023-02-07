// getting odd numbers of an array 
function getsOddNumberOfArray(numbers){
    const oddNumbers = [];
    for(i=0; i<numbers.length; i++){
        const index = i;
        const element = numbers[i];
        if (element%2 !==0){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [53, 59, 29, 45, 27, 54, 67];
const thisOdd = getsOddNumberOfArray(myNumbers);
console.log(thisOdd)