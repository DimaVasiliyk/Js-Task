// 2. Write a JavaScript function to clone an array.  
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

let arrOne = [1, 2, 4, 0]
let arrTwo = [1, 2, [4, 0]]
function cloned(myArray){
   return clone = myArray.slice(0);
}
cloned(arrOne)
cloned(arrTwo)
console.log(cloned(arrOne))
console.log(cloned(arrTwo));