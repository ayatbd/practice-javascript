// generally function structure


// function functionName (parameters){
//     function body
//     return
// }

// var returnValues = functionName (parameters values);


function getAverages (assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

var assignment1Marks = 59;
var assignment2Marks = 58;
var assignment3Marks = 60;

var myAverage = getAverages(assignment1Marks, assignment2Marks, assignment3Marks);
console.log(myAverage);