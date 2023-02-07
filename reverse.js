// / module 22.8
//  --------------------------------
function reverseString (text){
    for(let i = text.length-1; i>=0; i--){
        const element = text[i];
        console.log(element);
    }
}

const myString = "I am a good boy";
const reveresed = reverseString (myString);