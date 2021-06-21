// 8. Write a JavaScript program to find the most frequent item of an array. 
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times 
let array=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
program(array)
let finish = program(array);
function program (arr) { 
  let counts = {}; 
  let compare = 0; 
  let mostfrequent ; 
   for (let i = 0, len = arr.length; i <len; i ++) { 
       let word = arr [i]; 
       if (counts[word] === undefined) { 
           counts[word] = 1; 
       } else { 
           counts[word] = counts[word] + 1; 
       } 
       if (counts[word] > compare) { 
             compare = counts[word]; 
             mostfrequent = arr[i]; 
       } 
    } 
  return {mostfrequent,counts:counts[mostfrequent]};
} 
console.log ('Самый частый элемент:',finish)