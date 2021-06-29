
// 32. Write a JavaScript function to find an array contains a specifict elemen.  
// Test data :
// [True]
let arr = [2, 5, 9, 6];
function contains(array,elemen){
    for (let i = 0; i < array.length; i++){
        if (arr[i] === elemen){
        return true;
        }
    }
    return false;
}
console.log(contains(arr, 9));


