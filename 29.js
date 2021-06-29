// 29. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds. 
// Test Data :
console.log(num('a', "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
function num(start,end,step){
    let range = [];
    if ((step === 0) || (typeof start =="undefined") || (typeof start != typeof end))
    
    if(end < start){
        step = -step;
    }

    if(typeof start == "number"){

        while(step > 0 ? end >=start : ed <= start){
            range.push(String.fromCharCode(start));
            start += step;

        }

    } else if (typeof start == "string") {

        if (start.length != 1 || end.length !=1){
            throw TypeEroor("Поддерживаются строки с одним символом.")
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start){
            range.push(String.fromCharCode(start));
            start += step;
        }
    } else {
            throw TypeError("Поддерживаются только строка и число");
        }
        return range;

}

