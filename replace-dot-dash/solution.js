function insertDash(num) {
  
  let input = num.toString();
  let output = input.slice(0,1);
  
  for(let i=0; i < (input.length-1); i++){
    if (((Number(input[i])%2) != 0) && ((Number(input[i+1])%2) != 0)) { 
      output += '-' + input.slice(i+1,i+2);
    }
    else output += input.slice(i+1,i+2);
  }
  return output;
  }