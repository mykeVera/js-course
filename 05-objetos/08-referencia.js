let a = {};
let b = a;
b.prop = 1;
console.log(a, b);


let c = 1;
function suma(n) {
    n++;
}
suma(c);
console.log(c);


let d = { prop: 1 };
function sumaa(n) {
    n.prop++;
}
sumaa(d);
console.log(d);



/**
 * OJOOOO, LOS TIPOS:
 * 
 * - PRIMITIVOS -> Se copian (number, string, boolean, etc)
 * - REFERENCIA -> Se referencian (Objetos, Arrays, Funciones)
 */