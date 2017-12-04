function capitalize(s){
  let sp = s.split('');
  let oddstr = '';
  let evenstr = '';
  sp.forEach(function(value,index,arr){
     (index%2 == 0) ? (oddstr += value , evenstr += value.toUpperCase())
                      : (evenstr += value , oddstr += value.toUpperCase());
  })
  
  return [`${evenstr}`, `${oddstr}`];
};