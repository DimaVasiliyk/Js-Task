// 28. Write a JavaScript function to find the longest common starting substring in a set of strings 
let arrOne = ['go', 'google'];
let arrTwo = ['SQLInjection', 'SQLTutorial'];
let arrThree = ['abcd', '1234'];
function longest_common_starting_substring(arr){
    const a1= arr[0];
    const a2= arr[arr.length-1];
    let i= 0;
    while(i< a1.length && a1.charAt(i) === a2.charAt(i)) i++;
    return a1.substring(0, i);
    }
console.log(longest_common_starting_substring(arrOne))
console.log(longest_common_starting_substring(arrTwo ))
console.log(longest_common_starting_substring(arrThree))
