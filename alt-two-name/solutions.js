function abbrevName(name) {
    var arr = name.split(" ");
    var initstr = arr[0][0].toUpperCase();
    for (let i = 1; i < arr.length; i++) {
        initstr += "." + arr[i][0].toUpperCase();
    }
    return initstr;    
}