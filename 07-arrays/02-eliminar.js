// eliminar ultimo elemento
const letras1 = ['a', 'b', 'c', 'd'];
letras1.pop();
console.log(letras1); // ['a', 'b', 'c']


// eliminar primer elemento
const letras2 = ['a', 'b', 'c', 'd'];
letras2.shift();
console.log(letras2); // ['b', 'c', 'd']


// eliminar al medio
const letras3 = ['a', 'b', 'c', 'd'];
letras3.splice(1, 2); 
console.log(letras3); // ['a', 'd']
