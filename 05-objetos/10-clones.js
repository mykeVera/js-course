let punto = {
    x: 10,
    y: 15
};

// Clones de objetos de forma antigua (2015)
let referencia = Object.assign(punto, { z: 20, x: 1 });
let clonePunto = Object.assign({}, punto, { z: 20, x: 1 });  // asignar un objeto a otro

// console.log(punto, clonePunto);
// console.log(referencia);

let copiaPunto = Object.assign({}, punto);
console.log(punto, copiaPunto);

// Clones de objetos de forma moderna (RECOMENDADO)
let copiaPunto2 = { ...punto }; // ... spreed operator
console.log(copiaPunto2);


// Copia de objetos de forma antigua (NO RECOMENDADO)
let copiaPunto4 = {};
for (let llave in punto){
    copiaPunto4[llave] = punto[llave];
}
console.log(copiaPunto4);