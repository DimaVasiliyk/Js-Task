// 20. Write a JavaScript program to find duplicate values in a JavaScript array
function duplicate(arr) {
    let object = {};
    let result = [];

    arr.forEach(function (item) {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (let num in object) {
       if(object[num] >= 2) {
           result.push(num);
       }
    }

    return result;

}
const test = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]
console.log(duplicate(test));
