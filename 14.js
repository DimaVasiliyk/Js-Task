let theNum = [1,'apple',2,'apple',3,'orange',4,4,5,6,7,'orange',7];
console.log(theNum);
console.log(remove(theNum));


function remove(num){
    len=num.length;
    let out = [];
    let obj = {};
    for (let x = 0; x < len ; x++){
        obj[num[x]]=0;
    }
    for(x in obj){
        out.push(x);
    }
    return out;
}


