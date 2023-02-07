function getSum(numbers){
    let num = 0;
    for(let i=0; i<numbers.length; i++){
        // this is how to get index of an Array
        const index = i;
        // this is how to get the array elements besides array index
        const element = numbers[index];
        // this is for how to get array total numbers
        num = num + element;
        console.log(index, element);
    }
}

const myNumbers = [53, 59, 29, 45, 27, 54, 67];
getSum(myNumbers);


