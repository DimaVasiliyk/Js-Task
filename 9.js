// Write a JavaScript program which accept a string as input and swap the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'. 

let str = 'The Quick Brown Fox';

const findLetter = (char = '') => {
   if(char.toLowerCase() === char.toUpperCase){
      return char;
   }else if(char.toLowerCase() === char){
      return char.toUpperCase();
   }else{
      return char.toLowerCase();
   };
};

const swapCase = (str = '') => {
   let res = '';
   for(let i = 0; i < str.length; i++){
      let elem = str[i];
      res += findLetter(elem);
   };
   return res;
};

console.log(swapCase(str));









