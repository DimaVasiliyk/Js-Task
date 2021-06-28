// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. 
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
let array =  [NaN, 0, 15, false, -22, '',undefined, 47, null];

const remove = (arr) =>{
   return arr.filter((e) => !!e);
}
const remove = (arr) => arr.filter((e) => !!e)
console.log(remove(arr))