// // 23. Write a JavaScript function to find the difference of two arrays.  
// // Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// // ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
function diffArray(arr1, arr2) {
    arr1 = arr1.flat(Infinity)
    arr2 = arr2.flat(Infinity)
    let arrDiff1 = arr1.filter(function(currentValue){
      return arr2.indexOf(currentValue) === -1;
    });
    
    let arrDiff2 = arr2.filter(function(currentValue){
      return arr1.indexOf(currentValue) === -1;
    });
    
    return arrDiff1.concat(arrDiff2);
  }
console.log(diffArray([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
console.log(diffArray([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["6"]