const letras = ['a', 'b'];

// agrega al final
letras.push('c', 'd');

// agregar al comienzo
letras.unshift('y', 'z');

// agrega al medio segun indicación
letras.splice(3, 0, 1, 2);

console.log(letras);