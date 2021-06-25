function sum(arr) {
    let sumarr = 0;
    
    for(let i = 0; i < arr.length; i++){
    sumarr += Math.pow(arr[i],2);
    }
    
    return sumarr;
    }
console.log(sum([0,1,2,3,4]));