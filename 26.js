// 26. Write a JavaScript program to find a pair of elements (indices of the two numbers)
//  from an given array whose sum equals a specific target number.  
// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3
let numbers= [10,20,10,40,50,60,70];
let target = 50;
function program(num,tar){
    for(let i = 0; i < num.length; i++){
        let search = tar - num[i];
        let index = num.indexOf(search)
        if (index !== -1){
            return [i,index]; 
        }
    }
return -1;
}
console.log(program(numbers,target))
