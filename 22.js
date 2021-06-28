// 22. Write a JavaScript program to compute the union of two arrays.  
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]
const arOne = [1, 2, 3];
const arTwo = [100, 2, 1, 10];

console.log([...new Set([...arOne,...arTwo])])

