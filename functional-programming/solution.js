1) Use map() to double the values in an array

function double(array) {
    return array.map(x=>x*2);
}

2) List Filtering

function filter_list(l) {
    return l.filter(el => Number.isInteger(el))
  }

3) Calculate average

function find_average(array) {
    return array.reduce((acc, curr) => acc + curr) / array.length;
}
