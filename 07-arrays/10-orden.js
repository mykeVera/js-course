let numeros = [15, 10, -3];

numeros.sort();
console.log(numeros); // [-3, 10, 15]

numeros.reverse();
console.log(numeros); // [15, 10, -3]

/* -----------------------------------------*/

let letras = ['z', 'a', 'd'];

letras.sort();
console.log(letras); // ['a', 'd', 'z']

letras.reverse();
console.log(letras); // ['z', 'd', 'a']

let conMayusculas = ['Z', 'a', 'd'];
conMayusculas.sort((a, b) => {
    /**
     * a antes b => -1
     * b antes a => 1
     * si son iguales => 0
     */
    let alower = a.toLocaleLowerCase();
    let blower = b.toLocaleLowerCase();

    if(alower < blower) return -1
    if(blower > alower) return 1
    return 0;
});
console.log(conMayusculas);

/* -----------------------------------------*/

let usuarios = [
    {edad: 15, nombre: 'Felipe'},
    {edad: 25, nombre: 'Nicolas'},
    {edad: 13, nombre: 'Poli'}
];

usuarios.sort((a, b) => {
    if(a.edad < b.edad) return -1
    if(b.edad > a.edad) return 1
    return 0;
});
console.log(usuarios)