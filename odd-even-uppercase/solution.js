function capitalize(s){
    let oddstr = '';
    let evenstr = '';
    s.forEach(function(value,index,arr){
       (index%2 == 0) ? (oddstr = oddstr + value , evenstr = evenstr + toUppercase(value))
                        : (evenstr = evenstr + value , oddstr = oddstr + toUppercase(value));
    })
    
    return [oddstr + evenstr];
  };