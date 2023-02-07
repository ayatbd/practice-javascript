function removeDuplicates(arr) {
    let uniqueElements = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueElements.includes(arr[i])) {
        uniqueElements.push(arr[i]);
      }
    }
    return uniqueElements;
  }
  
  let arr = ['abul', 'babul', 'kabul', 'habul', 'sabul'];
  console.log(removeDuplicates(arr));
