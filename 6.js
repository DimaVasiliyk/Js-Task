// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
// For example if you accept 025468 the output should be 0-254-6-8.  
let nameOne = "025468"
let arrOne = nameOne.split('');

const test = (item,i,array) => {
  if (item % 2 == 0){
    if (array[i-1] % 2 == 0){
      return -item 
    }
  }
    return item;
}
const arrLast = arrOne.map(test);
const arr = arrLast.join('')
console.log(arr)