let arr1 = [1, 2];
let arr2 = [3, 4];

let combinados = arr1.concat(arr2); // devuelve un nuevo array
// console.log(combinados); // [1, 2, 3, 4]

// let divididos = combinados.slice(1, 3); // devuelve un nuevo array
// console.log(divididos); // [2, 3]

// let divididos = combinados.slice(1);
// console.log(divididos); // [2, 3, 4]

let divididos = combinados.slice();
console.log(divididos); // [1, 2, 3, 4]



