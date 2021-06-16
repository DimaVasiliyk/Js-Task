// 1. Write a JavaScript function to check whether an `input` is an array or not.  
// Test Data :
// console.log(is_array(maks_test_task));
// console.log(is_array([1, 2, 4, 0]));
// false
let arrOne = "maks_test_task"
let arrTwo = [1, 2, 4, 0]

function checkwether(obj){
   return Array.isArray(obj)
}
checkwether(arrOne)
checkwether(arrTwo)
console.log(checkwether(arrOne))
console.log(checkwether(arrTwo))