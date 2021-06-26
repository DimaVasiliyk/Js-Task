// 16. Find the leap years in a given range of years 
function range(startYear, endYear) {
    let yearRange = [];
        for (let i = startYear; i <= endYear; i++)
        {
            yearRange.push(i);
        }

    let newArray = [];
        yearRange.forEach(
            function(year)
             { 
            if (testLeapYear(year)) 
            newArray.push(year);
            });
return newArray;
}

function testLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
        } else {
            return false;
        }
}

console.log(range(2000,2021));