function cubeOdd(arr) {
    let var1 = []; 
    let var2 = [];
    arr.map((x,i) => {var1[i] = Number.isInteger(x)});
    if (var1.includes(false)) return undefined;
    //arr.map(x => !(Number.isInteger(x)) return undefined);
    var2 = arr.filter(x => (x%2 !== 0)).map(x => Math.pow(x, 3));
    if (var2.length > 0) return var2.reduce((acc, curr) => acc + curr)
    }