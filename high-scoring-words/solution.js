function high(x){
    if (x.length > 0) {arr = x.split(" ")} else { return ''}; 
    let highestSum = 0;
    let largestWork = '';
    arr.forEach((value)=>{
       let sum = 0;
       let str = value.toString(); 
       for (j = 0; j < str.length; j++) {sum += str.charCodeAt(j) - 96;}
            if (sum > highestSum){ highestSum = sum; largestWord = str; } 
       })
     return largestWord
 }