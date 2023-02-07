function findingBadData(data) {
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
  console.log(returnNumber)