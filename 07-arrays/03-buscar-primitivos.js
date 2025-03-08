const letras = ['a', 'b', 1, 'c', 'd', 1];

// valid data types
console.log(letras.indexOf('c')); // Seart from left to right
console.log(letras.indexOf(1, 5)); // Seart from left to right
console.log(letras.lastIndexOf(1)); // Seart from right to left

// antiguous code
console.log(letras.indexOf(1) !==  -1);

// moder code
console.log(letras.includes(1));






