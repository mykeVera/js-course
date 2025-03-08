function paraAbsoluto(arr) {
    // return arr.map(a => Math.abs(a));
    return arr.map(Math.abs);
}

const ns = [-2, 3, 5, -15];

const absolutos = paraAbsoluto(ns);

console.log(absolutos); // [2, 3, 5, 15]

