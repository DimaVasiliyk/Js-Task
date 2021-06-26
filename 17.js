// Write a JavaScript program to shuffle an array. 
let array = [- 3, 8, 7, 6, 5, -4, 3, 2, 1 ]
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array
  }
console.log(shuffle([- 3, 8, 7, 6, 5, -4, 3, 2, 1 ]));
console.log(shuffle(array))