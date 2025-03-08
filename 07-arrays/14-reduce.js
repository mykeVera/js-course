// const numeros = [1, 2, 3, 4];

// const suma = numeros.reduce((acc, el) =>{
//     return acc + el
// }, 0); // 0 es el valor inicial del acumulador acc
// console.log(suma); // 10



// const anidado = [[1, 2], 3, [4,5]];
// const plano = anidado
//     .reduce((acc, el) => acc.concat(el), []);
// console.log(plano); // [1, 2, 3, 4, 5]



const usuarios = [
    { edad: 17, nombre: 'Nico'},
    { edad: 13, nombre: 'Chanchito'},
    { edad: 25, nombre: 'Felipe'},
    { edad: 32, nombre: 'Fernanda'},
];

// cuando tengo miles de elementos, IMPORTANT!!!
const indexado = usuarios.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el
}), {});

console.log(indexado);