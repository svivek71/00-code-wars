function solution(str){
    let reverseString  = '';
      for (let i = str.length; i >= 0; i--){
      reverseString += str.substr(i,1);
      }
      return reverseString
    }